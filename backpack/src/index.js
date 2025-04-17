import { JqueryPlay } from "./JqueryPlay";

JqueryPlay();

// Live-reload for esbuild
new EventSource('/esbuild').addEventListener('change', () => location.reload())