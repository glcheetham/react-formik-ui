import React from 'react'
import { shallow, mount } from 'enzyme'
import useLabel from '../useLabel'
import { Autocomplete } from './Autocomplete'

describe('<Autocomplete />', () => {
  const baseProps = {
    name: 'autocompleteTest',
    suggestions: [
      'Afghanistan',
      'Aland Islands',
      'Albania',
      'Algeria',
    ],
    formik: {
      handleChange: jest.fn(),
      handleBlur: jest.fn(),
      setFieldValue: jest.fn(),
      setFieldTouched: jest.fn(),
      touched: {},
      errors: {},
      values: {
        autocompleteTest: false,
      },
    },
  }

  const WrappedComponent = useLabel('autocomplete')(Autocomplete)

  it('should render', () => {
    const wrapper = shallow(<Autocomplete {...baseProps} />)

    expect(wrapper).toBeDefined()
  })

  it('should allow custom className', () => {
    const props = {
      ...baseProps,
      className: 'Custom',
    }
    const wrapper = mount(<WrappedComponent {...props} />)

    expect(wrapper.find('.form-element').hasClass(props.className)).toBe(true)
  })

  it('should be disabled', () => {
    const wrapper = mount(<WrappedComponent {...baseProps} disabled />)

    expect(wrapper.find('input').prop('disabled')).toBe(true)
    expect(wrapper.find('label').hasClass('isDisabled')).toBe(true)
  })

  it('should have a hint', () => {
    const props = {
      ...baseProps,
      hint: 'hintTest',
    }
    const wrapper = mount(<WrappedComponent {...props} />)

    expect(wrapper.find('.hint').length).toBe(1)
    expect(wrapper.find('.hint').text()).toBe(props.hint)
  })

  it('should call handleChange', () => {
    const wrapper = mount(<Autocomplete {...baseProps} />)

    wrapper.find('input').simulate('change', { target: { value: 'a' } })

    expect(baseProps.formik.setFieldValue).toHaveBeenCalled()
    expect(baseProps.formik.setFieldTouched).toHaveBeenCalled()
  })

  /* Following Tests will be adjusted and uncommented upon Enzyme update for supporting Hooks */

  // it('should show suggestions', () => {
  //   const wrapper = mount(<Autocomplete {...baseProps} />)

  //   wrapper.find('input').simulate('change', { target: { value: 'a' } })

  //   expect(wrapper.state('showSuggestions')).toBe(true)
  // })

  // it('should handle key down', () => {
  //   const wrapper = mount(<Autocomplete {...baseProps} />)

  //   wrapper.find('input').simulate('change', { target: { value: 'a' } }).simulate('keyDown', { keyCode: 40 })

  //   expect(wrapper.state('activeSuggestion')).toBe(1)
  // })

  // it('should handle key up', () => {
  //   const wrapper = mount(<Autocomplete {...baseProps} />)

  //   wrapper.find('input').simulate('change', { target: { value: 'a' } }).simulate('keyDown', { keyCode: 38 })

  //   expect(wrapper.state('activeSuggestion')).toBe(-1)
  // })
})
