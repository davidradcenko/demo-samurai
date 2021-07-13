import './CMC.css';
const CMC = (props) => {
    return (

        <div className='CMC'>
            <div className='CMC_Foto_name_users'>
                <img src="https://img2.freepng.ru/20180423/itq/kisspng-emoticon-smiley-emoji-clip-art-remind-clipart-5add96493aeb00.8147140915244713692413.jpg"
                    alt="Smail" />
                <p className='CMC_name_users'>{props.name}</p>
            </div>
            <div className='CMC_text'>{props.text}
            </div>
        </div>
    );
}
export default CMC;