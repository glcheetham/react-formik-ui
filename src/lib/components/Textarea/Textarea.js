import React from 'react'
import PropTypes from 'prop-types'
import { connect, getIn } from 'formik'

import withLabel from '../withLabel'
import './styles.scss'

export const Textarea = ({
  formik: {
    values, handleChange,
  },
  disabled,
  id,
  name,
  placeholder,
  onFocus,
  onBlur,
  ...rest
}) => (
  <textarea
    id={id || name}
    name={name}
    placeholder={placeholder}
    value={getIn(values, name)}
    onChange={handleChange}
    onFocus={onFocus}
    onBlur={onBlur}
    disabled={disabled}
    {...rest}
  />
)

Textarea.propTypes = {
  formik: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onFocus: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,

}

Textarea.defaultProps = {
  disabled: false,
  id: null,
  placeholder: null,
}

export default connect(withLabel('textarea')(Textarea))
