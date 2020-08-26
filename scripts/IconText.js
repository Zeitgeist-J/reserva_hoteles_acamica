const IconText = ({ icon, text }) => {
    return (
        <div className="p-icon">
            <div className="container-icon">
                <span className="material-icons">
                    {icon}
                </span>
            </div>
            <div className="text-icon-container">
                <p className="w-icon">{text}</p>
            </div>
        </div>

    );
}