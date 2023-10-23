const Avatar = ({ image }) => {
    return (
        <div className="avatar">
            <img src={image} alt="profile" height="50px" />
        </div>
    )
}

export default Avatar;