const Button = ({ label, onClick, type = 'button', className = '', disabled = false }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 ${
                disabled ? 'opacity-50 cursor-not-allowed' : ''
            } ${className}`}
        >
            {label}
        </button>
    );
};

export default Button;
