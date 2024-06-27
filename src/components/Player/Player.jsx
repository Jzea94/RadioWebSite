import './Player.css'

function Player () {
  return (
    <div className='player'>
      <div className='player-color'>
        <audio controls autoPlay>
          <source src='https://stream.zeno.fm/heel3mmghr7vv' type='audio/mpeg' />
        </audio>
      </div>
    </div>
  )
}

export default Player
