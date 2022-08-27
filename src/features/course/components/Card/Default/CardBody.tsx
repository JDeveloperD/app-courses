import { FC } from 'react';
import { Price } from '@features/course';
import { HeadLine, Small, AiOutlineUser, FiThumbsUp } from '@features/ui';
import CardCourseStyled from './courseCardDefault.styled';
import { formatCurrency } from '@utils/formatCurrency';
import Link from 'next/link';

type CardBodyProps = {
  nameCourse: string,
  instructorName: string,
  price: Price,
  discount?: Price
  totalStudents: number
  rating: number
  permalink: string
}

const CardBody: FC<CardBodyProps> = ({
  permalink,
  nameCourse,
  instructorName,
  price,
  discount,
  totalStudents,
  rating
}) => {
  return (
    <CardCourseStyled.Body>
      <Link href={permalink} passHref>
        <a className='text-decoration-none'>
          <HeadLine
            size={5}
            className="mb-1"
            color='textBody'
            >{nameCourse}
          </HeadLine>
        </a>
      </Link>
      <Small color='gray'>{instructorName}</Small>
      <div className='mt-3'>
        <Small color='gray' className='d-inline-flex align-items-center gap-2'>
          <AiOutlineUser />
          {totalStudents} alumnos
        </Small>
        <Small color='gray' className='d-inline-flex align-items-center gap-2 ms-4'>
          <FiThumbsUp />
          {(rating * 100) / 5}%
        </Small>
      </div>
      <CardCourseStyled.Amount className='mt-3'>
        {discount && (
          <>
            <HeadLine color='danger' size={5} className="mb-0">
              {formatCurrency(discount.amount)}
            </HeadLine>
            <Small color='gray' as="del">
              {formatCurrency(price.amount)}
            </Small>
          </>
        )}

        {!discount && (
          <HeadLine size={5}>
            {formatCurrency(price.amount)}
          </HeadLine>
        )}

      </CardCourseStyled.Amount>
    </CardCourseStyled.Body>
  );
};

export default CardBody;
