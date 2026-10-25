function VerticalBar() {
    return (
        <div className="vertical-bar">
            <img src='public\profile_pic.png' alt='profile' className='top-right-profile-picture' height="100" width="auto" />
            <div className='main-sections'>
                <button className='vertical-bar-button'>Home</button>
                <button className='vertical-bar-button'>Messaging</button>
                <button className='vertical-bar-button'>Merch Collections</button>
                <button className='vertical-bar-button'>Anime</button>
                <button className='vertical-bar-button'>Notifications</button>
            </div>
            <div className='bottom-sections'>
                <button className='vertical-bar-button'>Settings</button>
                <button className='vertical-bar-button'>Log Out</button>
            </div>
        </div>
    )
}

export default VerticalBar