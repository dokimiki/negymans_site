export default function imageLoader({ src, width, quality }: { src: string; width: number; quality?: number }): string {
    if (src.startsWith("/")) {
        return `/negymans_site${src}`;
    }
    return src;
}
