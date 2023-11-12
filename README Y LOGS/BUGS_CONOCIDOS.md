# ESTE DOCUMENTO FUE DISEÑADO PARA SER VISUALIZADO A PANTALLA COMPLETA.
# Por favor, lea el documento antes de usar el servicio o reportar errores.
# AUTOR: Martín García Ramos FECHA: 12/11/2023

<888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888>

#               %%%%        %%%%%%%%%%    %%%%%%%#********           ********        *****           ************  ****************** *************** ****************   
#              %%%%%%          %%%%%        %%%#    *******         *******          ******         ****      ***  **    *****    ***  ******     ***   *****    ******  
#             %%%%%%%%         %%%%%%      %%%%     ********       ********         ********       *****      ***  **    *****    ***   *****       *   *****    ******  
#             %%%%%%%%          %%%%%%     %%%      *********     *********        *********       *******               *****          *****    **     *****    *****   
#            %%%  %%%%%          %%%%%%   %%%       *** ******   *** ******        *** ******       *************        *****          ***********     ************     
#           %%%   %%%%%%          %%%%%  %%%        ***  ****** ***  ******       ***   ******        ************       *****          ***********     ************     
#          %%%%%%%%%%%%%%          %%%%%%%%         ***   ********   ******      **************              *****       *****          *****    **     *****  ******    
#         %%%%      %%%%%%         %%%%%%%%         ***    *******   ******     ***       ******   ***       *****       *****          *****       *   *****   ******   
#        %%%%        %%%%%%         %%%%%%          ***     *****    ******    ****       ******   ****     *****        *****         ******      **   *****    ******* 
#       %%%%%%%    %%%%%%%%%%        %%%%         *******    ***   *****************     ********* ************        **********     *************** **********   ******

#                    _____                        _                   _                        _             _     _                      _ __                 
#                   |_   _|   _    __ _  ___  ___| |_ ___  _ __    __| | ___    ___ ___  _ __ | |_ ___ _ __ (_) __| | ___     ___ _ __   | /_/_ __   ___  __ _ 
#                     | || | | |  / _` |/ _ \/ __| __/ _ \| '__|  / _` |/ _ \  / __/ _ \| '_ \| __/ _ \ '_ \| |/ _` |/ _ \   / _ \ '_ \  | | | '_ \ / _ \/ _` |
#                     | || |_| | | (_| |  __/\__ \ || (_) | |    | (_| |  __/ | (_| (_) | | | | ||  __/ | | | | (_| | (_) | |  __/ | | | | | | | | |  __/ (_| |
#                     |_| \__,_|  \__, |\___||___/\__\___/|_|     \__,_|\___|  \___\___/|_| |_|\__\___|_| |_|_|\__,_|\___/   \___|_| |_| |_|_|_| |_|\___|\__,_|
#                                 |___/                                                                                                                        


#                                +——————————————————————————————————————————————————————————————————————————————————————————————————————————————————+
#                                |  ██████╗ ██╗   ██╗ ██████╗ ███████╗     ██████╗ ██████╗ ███╗   ██╗ ██████╗  ██████╗██╗██████╗  ██████╗ ███████╗  |
#                                |  ██╔══██╗██║   ██║██╔════╝ ██╔════╝    ██╔════╝██╔═══██╗████╗  ██║██╔═══██╗██╔════╝██║██╔══██╗██╔═══██╗██╔════╝  |
#                                |  ██████╔╝██║   ██║██║  ███╗███████╗    ██║     ██║   ██║██╔██╗ ██║██║   ██║██║     ██║██║  ██║██║   ██║███████╗  |
#                                |  ██╔══██╗██║   ██║██║   ██║╚════██║    ██║     ██║   ██║██║╚██╗██║██║   ██║██║     ██║██║  ██║██║   ██║╚════██║  |
#                                |  ██████╔╝╚██████╔╝╚██████╔╝███████║    ╚██████╗╚██████╔╝██║ ╚████║╚██████╔╝╚██████╗██║██████╔╝╚██████╔╝███████║  |
#                                |  ╚═════╝  ╚═════╝  ╚═════╝ ╚══════╝     ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝  ╚═════╝╚═╝╚═════╝  ╚═════╝ ╚══════╝  |
#                                +——————————————————————————————————————————————————————————————————————————————————————————————————————————————————+


    BUGS Conocidos descripción según escala de gravedad o comportamiento (Alta: ↑ Media: = Baja: ↓  Reversión de cambio: ← Actualización: →):

#        <↓> Buscador: Está pendiente de establecerle mejores estilos css, para margen y maquetación general.
#        <↑> Resultados: Pendiente ajustar automáticamente a ancho de pantalla sin modificar proporcion de posters de resultados.
#        <↑> Información de resultado: Pendiente establecer estilos CSS.
#        <↑> ERROR Información de resultado: En carga de información de resultado: Pendiente de corregir.
*            |
             |->    GET https://image.tmdb.org/t/p/w300_and_h450_bestv2undefined 404 (Not Found)
                        Image (asíncrono)		
                        commitMount	@	react-dom.development.js:11038
                        commitLayoutEffectOnFiber	@	react-dom.development.js:23407
                        commitLayoutMountEffects_complete	@	react-dom.development.js:24688
                        commitLayoutEffects_begin	@	react-dom.development.js:24674
                        commitLayoutEffects	@	react-dom.development.js:24612
                        commitRootImpl	@	react-dom.development.js:26823
                        commitRoot	@	react-dom.development.js:26682
                        performSyncWorkOnRoot	@	react-dom.development.js:26117
                        flushSyncCallbacks	@	react-dom.development.js:12042
                        (anónimo)	@	react-dom.development.js:25651
        
#        <↓> INFORMACIÓN DE RESULTADO: Falta por mostrar el GÉNERO, DIRECTOR Y ELENCO DE ACTORES
#        <↓> ITEM-RESULTADO: Si la API no tiene imagen usar una imagen por defecto.
#        <↑> ERROR en consola de navegador:
*         |
          +---> Warning: Each child in a list should have a unique "key" prop.
                    Check the render method of `Cartelera`. See https://reactjs.org/link/warning-keys for more information.
                        at ItemResultadoBusqueda (http://localhost:3000/static/js/bundle.js:427:20)
                        at Cartelera (http://localhost:3000/static/js/bundle.js:776:84)
                        at RenderedRoute (http://localhost:3000/static/js/bundle.js:39949:5)
                        at Outlet (http://localhost:3000/static/js/bundle.js:40488:26)
                        at main
                        at div
                        at MainLayout (http://localhost:3000/static/js/bundle.js:631:81)
                        at RenderedRoute (http://localhost:3000/static/js/bundle.js:39949:5)
                        at Routes (http://localhost:3000/static/js/bundle.js:40571:5)
                        at Router (http://localhost:3000/static/js/bundle.js:40509:15)
                        at BrowserRouter (http://localhost:3000/static/js/bundle.js:38569:5)
                        at div
                        at App
                    printWarning @ react-jsx-dev-runtime.development.js:87
                    error @ react-jsx-dev-runtime.development.js:61
                    validateExplicitKey @ react-jsx-dev-runtime.development.js:1078
                    validateChildKeys @ react-jsx-dev-runtime.development.js:1105
                    jsxWithValidation @ react-jsx-dev-runtime.development.js:1266
                    Cartelera @ index.js:19
                    renderWithHooks @ react-dom.development.js:16305
                    updateFunctionComponent @ react-dom.development.js:19588
                    beginWork @ react-dom.development.js:21601
                    beginWork$1 @ react-dom.development.js:27426
                    performUnitOfWork @ react-dom.development.js:26557
                    workLoopSync @ react-dom.development.js:26466
                    renderRootSync @ react-dom.development.js:26434
                    performConcurrentWorkOnRoot @ react-dom.development.js:25738
                    workLoop @ scheduler.development.js:266
                    flushWork @ scheduler.development.js:239
                    performWorkUntilDeadline @ scheduler.development.js:533
                
#        <↑> ERROR en consola de navegador: 
*         |
          |---> Error while trying to use the following icon from the Manifest: http://localhost:3000/logo192.png (Download error or resource isn't a valid image)

<888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888>