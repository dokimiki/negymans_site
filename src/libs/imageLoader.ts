export default function imageLoader({ src, width, quality }: { src: string; width: number; quality?: number }): string {
    if (src.startsWith("/")) {
        return `/${process.env.NEXT_PUBLIC_BASE_PATH}${src}`;
    }
    return src;
}
