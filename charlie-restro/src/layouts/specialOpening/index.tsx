import styles from './styles.module.css';
import { VisitBtn } from '@/component/visitBtn';

const SpecialOpening = (params: any) => {
  const langData = params.langData;
  const path = params.lang;
  const sections = [
    {
      id: 1,
      className: styles.first,
      title: '',
      description: 'Tapas',
      btnColor: 'white',
      linkTag: langData[0].linkTag,
      link: `${path}/menü-karte-menu-card/speisekarte-a-la-carte`,
    },
    {
      id: 2,
      className: styles.second,
      title: '',
      description: 'Private Events',
      btnColor: 'white',
      linkTag: langData[0].linkTag,
      link: `${path}/einrichtungen/essbereich`,
    },
    {
      id: 3,
      className: styles.third,
      title: '',
      description: 'All You Can Eat',
      btnColor: 'white',
      linkTag: 'Group offers',
      link: `${path}/gruppenangebot`,
    },
  ];

  return (
    <div className={styles.bg}>
      <div className={`${styles.main} flex flex-wrap justify-between gap-5`}>
        <div className={styles.special}>
          {sections.map((section) => (
            <div
              key={section.id}
              className={`${styles.wrapper} ${section.className} w-full sm:w-[calc(33.333%_-_4rem)]`} // Adjust width to fit three cards with gap
            >
              <div className={styles.details}>
                <span>{section.title}</span>
                <span className='text-4xl'>{section.description}</span>
                <VisitBtn
                  color={section.btnColor}
                  linkTag={section.linkTag}
                  link={section.link}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SpecialOpening