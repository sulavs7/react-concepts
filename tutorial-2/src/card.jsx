import profilePic from './assets/img.jpg'
function Card()
{

    return(
        <div className="card">
            <img className='cardImage' src={profilePic} alt="PROFILE PICTURE" />
            <h2 className='card-title'>Sulav Sapkota</h2>
            <p className='card-text'>I am learning JS and React</p>

        </div>
    );

}
export default Card