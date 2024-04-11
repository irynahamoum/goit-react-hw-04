import style from './ErrorMessage.module.css';
const ErrorMessage = () => {
  return <b className={style.error}> UPPS, some error occured. Please reload the page. </b>;
};

export default ErrorMessage;
