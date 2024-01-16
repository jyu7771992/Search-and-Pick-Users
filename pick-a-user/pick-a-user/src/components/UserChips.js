import './chip.css';

function UserChips() {
  return (
    <div className='user-chip'>
      <div className='user-box'>
        <img src='' alt='' />
        <p className='user-name'>random</p>
      </div>
      <button className='delete'>X</button>
    </div>
  );
}

export default UserChips;
