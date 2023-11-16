# ESTE DOCUMENTO FUE DISEÑADO PARA SER VISUALIZADO A PANTALLA COMPLETA.
# Por favor, lea el documento antes de usar el servicio o reportar errores.
# AUTOR: Martín García Ramos FECHA: 12/11/2023


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
        
#        <↓> ITEM-RESULTADO: Si la API no tiene imagen usar una imagen por defecto.
                
#        <↑> ERROR en consola de navegador: 
*         |
          |---> Error while trying to use the following icon from the Manifest: http://localhost:3000/logo192.png (Download error or resource isn't a valid image)

<888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888>