import Link from 'next/link'
import { StyledButton, StyledImg, StyledP } from './styledComponents/StyledComponents'

export default function Home() {
  return (
    <>
      <StyledP>О́зеро — компонент гидросферы, представляющий собой естественно возникший водоём, заполненный в пределах озёрной чаши (озёрного ложа) водой и не имеющий непосредственного соединения с морем (океаном). Озёра являются предметом изучения науки лимнологии. Число озёр в мире достигает 304 миллионов, включая мелкие с площадью поверхностью 0,1-10 гектаров.

        С точки зрения планетологии, озеро представляет собой существующий стабильно во времени и пространстве объект, заполненный веществом, находящимся в жидкой фазе, размеры которого занимают промежуточное положение между морем и прудом.

        С точки зрения географии, озеро представляет собой замкнутое углубление суши, в которое стекает и накапливается вода. Озёра не являются частью Мирового океана.</StyledP>
      <StyledImg src="https://upload.wikimedia.org/wikipedia/commons/f/f1/%D0%9E%D0%B7%D0%B5%D1%80%D0%BE_%D0%A1%D0%BC%D0%B5%D1%80%D0%B4%D1%8F%D1%87%D1%8C%D0%B5.jpg" alt="Lake" />
      <StyledImg src='https://cdnstatic.rg.ru/uploads/images/160/86/19/Gornoe_ozero_Depositphotos_1000.jpg' alt='Lake2' />
      <Link href={'/secondPage'}><StyledButton>Go to second page</StyledButton></Link>
    </>
  )
}
