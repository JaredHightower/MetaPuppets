import Accordion from './Accordion'
const style = {
  flexContainer: `
        flex 
        flex-col h-full items-center border-2 border-white text-white
    `,
  subContainer: `
    flex
    flex-col 
     justify-center border-2 h-screen w-10/12  border-emerald-500 text-white px-24 my-10
    `,
}

export default function FAQ() {
  return (
    <div className={style.flexContainer}>
      <h1>FAQ</h1>
      <div className={style.subContainer}>
        {data.map((items, index) => (
          <Accordion key={index} items={items} />
        ))}
      </div>
    </div>
  )
}

const data = [
  {
    question: 'Question 1',
    answer:
      'Q1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores soluta fuga cumque, minima non temporibus officia voluptatum a dolore repudiandae nihil distinctio totam sunt delectus unde! Vero excepturi eos illum?',
  },
  {
    question: 'Question 2',
    answer:
      'Q2: Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores soluta fuga cumque, minima non temporibus officia voluptatum a dolore repudiandae nihil distinctio totam sunt delectus unde! Vero excepturi eos illum?',
  },
  {
    question: 'Question 3',
    answer:
      'Q3: Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores soluta fuga cumque, minima non temporibus officia voluptatum a dolore repudiandae nihil distinctio totam sunt delectus unde! Vero excepturi eos illum?',
  },
  {
    question: 'Question 4',
    answer:
      'Q4: Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores soluta fuga cumque, minima non temporibus officia voluptatum a dolore repudiandae nihil distinctio totam sunt delectus unde! Vero excepturi eos illum?',
  },
]
