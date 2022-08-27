import { ButtonShare, HeadLine, Paragraph, Player } from '@features/ui';

const CoursePresentation = () => {
  return (
    <>
      <Player
        thumb='https://crehana-public-catalog.imgix.net/images/courses/promo-images/954d2f1e/f40fa18d.jpeg?auto=format&w=322&h=219&q=55&fit=crop&dpr=2'
        src='https://cdn.int64ago.org/p26nad4i.mp4'
      />
      <div className="text-end">
        <ButtonShare />
      </div>
      <HeadLine size={3} className="mb-4">¿Qué incluye éste curso?</HeadLine>
      <Paragraph>
        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur aliquet quam id dui posuere blandit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
      </Paragraph>
      <Paragraph>
        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt. Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta.
      </Paragraph>
    </>
  );
};

export default CoursePresentation;
