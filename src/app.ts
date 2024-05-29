import { envs } from "./config/envs";
import { AppRouter } from "./presentation/router";
import { Server } from "./presentation/server";

(async()=> {
    main()
})();

function main() {
    const server = new Server({
        port: envs.PORT,
        publicPath: envs.PUBLIC_PATH,
        routes: AppRouter.routes
    })
    server.start();
}