export default function imageLoader({ src, width, quality }: { src: string; width: number; quality?: number }): string {
    return `/${process.env.BASE_PATH || "test"}/${src}`;
}
