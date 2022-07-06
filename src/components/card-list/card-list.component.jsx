import Card from '../card/card.component';
import './card-list.styles.css';

// Long version
// const CardList = (props) => {
//     console.log('render from cardList');
//     const { monsters } = props;

//     return (
//         <div className='card-list'>
//             {monsters.map((monster) => {
//                 return (
//                     <Card monster={monster} />
//                 )
//             })}
//         </div>
//     )
// }

// Shorthand version
const CardList = ({ monsters }) => (
    <div className='card-list'>
        {monsters.map((monster) => {
            return (
                <Card monster={monster} />
            )
        })}
    </div>
)


export default CardList;