export default function imageLoader(src: string): string {
    return `/${process.env.BASE_PATH}/${src}`;
}
