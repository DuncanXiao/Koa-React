import styles from './style.scss';
import { personConfig } from './config';
import { Well } from 'react-bootstrap';

const AboutMe = () => {
  const personalInformation = personConfig.map((data, index) => {
    return (
      <Well bsSize="small" key={`information-${index}`} className={styles.information}>
        {data.label}: {data.content}
      </Well>
    )
  });
  return (
    <div className={styles.mainMe}>
      <div className={styles.title}>
        <span className={styles.tips}>关于我</span>
      </div>
      {personalInformation}
    </div>
  )
};

export default AboutMe;
