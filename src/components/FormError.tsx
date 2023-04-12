import styles from './FormError.module.scss';

export const FormError = ({ error }) => {
  return error ? (
    <div className={styles.error}>
      {error.message || (
        error.type === 'required' ? 'This field is required' :
        error.type === 'minLength' ? 'This field is to short' :
        error.type === 'min' ? 'This value is too low' :
        'Unknown validation error'
      )}
    </div>
  ) : null;
};
