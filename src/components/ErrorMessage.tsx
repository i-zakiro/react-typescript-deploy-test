interface ErrorMessageType {
    error: string;
}

export function ErrorMessage({ error }:ErrorMessageType) {
    return (
        <p className='text-center text-red-500'>${error}</p>
    )
}