# ESTE DOCUMENTO FUE DISEÑADO PARA SER VISUALIZADO A PANTALLA COMPLETA.
# Por favor, lea el documento antes de usar el servicio o reportar errores.
# AUTOR: Martín García Ramos | Fecha de creación: 12/11/2023 | Última Actualización: 14/11/2023


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


#     +---------------------------------------------------------------------------------------------------------------------------------------------------------------+
#     |  ███████╗███████╗ ██████╗ ██╗   ██╗███████╗███╗   ███╗ █████╗          ██╗███████╗██████╗ ██████╗  ██████╗ ██╗   ██╗██╗ ██████╗ ██████╗     ██████╗ ███████╗  |
#     |  ██╔════╝██╔════╝██╔═══██╗██║   ██║██╔════╝████╗ ████║██╔══██╗         ██║██╔════╝██╔══██╗██╔══██╗██╔═══██╗██║   ██║██║██╔════╝██╔═══██╗    ██╔══██╗██╔════╝  |
#     |  █████╗  ███████╗██║   ██║██║   ██║█████╗  ██╔████╔██║███████║         ██║█████╗  ██████╔╝██████╔╝██║   ██║██║   ██║██║██║     ██║   ██║    ██║  ██║█████╗    |
#     |  ██╔══╝  ╚════██║██║▄▄ ██║██║   ██║██╔══╝  ██║╚██╔╝██║██╔══██║    ██   ██║██╔══╝  ██╔══██╗██╔══██╗██║▄▄ ██║██║   ██║██║██║     ██║   ██║    ██║  ██║██╔══╝    |
#     |  ███████╗███████║╚██████╔╝╚██████╔╝███████╗██║ ╚═╝ ██║██║  ██║    ╚█████╔╝███████╗██║  ██║██║  ██║╚██████╔╝╚██████╔╝██║╚██████╗╚██████╔╝    ██████╔╝███████╗  |
#     |  ╚══════╝╚══════╝ ╚══▀▀═╝  ╚═════╝ ╚══════╝╚═╝     ╚═╝╚═╝  ╚═╝     ╚════╝ ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚══▀▀═╝  ╚═════╝ ╚═╝ ╚═════╝ ╚═════╝     ╚═════╝ ╚══════╝  |
#     |                                                                                                                                                               |
#     |  ██████╗ ██████╗  ██████╗ ██╗   ██╗███████╗ ██████╗████████╗ ██████╗                                                                                          |
#     |  ██╔══██╗██╔══██╗██╔═══██╗╚██╗ ██╔╝██╔════╝██╔════╝╚══██╔══╝██╔═══██╗                                                                                         |
#     |  ██████╔╝██████╔╝██║   ██║ ╚████╔╝ █████╗  ██║        ██║   ██║   ██║                                                                                         |
#     |  ██╔═══╝ ██╔══██╗██║   ██║  ╚██╔╝  ██╔══╝  ██║        ██║   ██║   ██║                                                                                         |
#     |  ██║     ██║  ██║╚██████╔╝   ██║   ███████╗╚██████╗   ██║   ╚██████╔╝                                                                                         |
#     |  ╚═╝     ╚═╝  ╚═╝ ╚═════╝    ╚═╝   ╚══════╝ ╚═════╝   ╚═╝    ╚═════╝                                                                                          |
#     +---------------------------------------------------------------------------------------------------------------------------------------------------------------+



*   A             Brainstorming

*   B             Planificación
    
*   C             Previa
    
*   D             Fase Peliculas
#       D.1             Página Base:
            D.1.a           Creación de web inicial HTML: /Buscador
            D.1.b           Creación de estilos CSS para web inicial: /Buscador
            D.1.c           Implementar API para llamarla cuando se realice una búsqueda
            D.1.d           Implementar estilos CSS para la lista de resultados de la búsqueda.
#       D.2             Página info:
            D.2.a           Creación de subsección HTML: Informacion-item
            D.2.b           Creación de estilos CSS para Información-item
            D.2.c           Adaptar el API para Información-item
#       D.3             Página Cartelera:
            D.3.a           Creación de sección adyacente HTML: Cartelera
            D.3.b           Creación de estilos CSS para Cartelera
            D.3.c           Adaptar API para llamarla cuando se muestre el listado.
            D.3.d           Adaptar estilos CSS para la lista de resultados.
#       D.4             Página Próximamente:
            D.4.a           Creación de sección adyacente HTML: Próximamente
            D.4.b           Creación de estilos CSS para Próximamente
            D.4.c           Adaptar API para llamarla cuando se muestre el listado.
            D.4.d           Adaptar estilos CSS para la lista de resultados.
*   E             Fase Series
#       E.1             Página Base:
            E.1.a           Adaptar API para detectar series.
            E.1.b           Implementar filtros para separar series de películas.
#       E.2             Página info:
            E.2.a           Adaptar/crear subsección HTML: Informacion-item para que soporte series
            E.2.b           Adaptar el API para Información-item
            E.2.c           Adaptar de estilos CSS de Información-item
#       E.3             Página Cartelera:
            E.3.a           Cambio de nombre a: Novedades
            E.3.b           Adaptación de estilos CSS
            E.3.c           Adaptar API para trackear también series.
            E.3.d           Adaptar estilos CSS para la lista de resultados.
#       E.4             Página Próximamente:
            E.4.a           Adaptar API para trackear también series.
            E.4.b           Adaptar estilos CSS para la lista de resultados.
    
*   F             Testeo y Debugging