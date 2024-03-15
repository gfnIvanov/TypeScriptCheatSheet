export default function(password: string): boolean {
    return password !== undefined && password !== null && password !== '';
}