import styles from './hotelSearchContinue.module.css' ;

export default function HotelSearchContinue(){
    return (
        <div className={styles.searchArea}>
            <svg className={styles.pattern}  xmlns="http://www.w3.org/2000/svg"  height="100" viewBox="0 0 1920 120" fill="none">
<path opacity="0.1" d="M1082.73 638.21C1143.66 573.926 1205.12 594.892 1266.04 530.608C1326.97 466.323 1265.51 445.357 1326.42 381.091C1387.33 316.825 1448.8 337.773 1509.73 273.488C1570.66 209.204 1509.2 188.238 1570.13 123.953C1631.05 59.6687 1692.51 80.6351 1753.45 16.3322C1814.4 -47.9708 1752.92 -68.9186 1813.85 -133.203M-123.58 218.72C-62.6533 154.436 -1.19537 175.402 59.7311 111.118C120.658 46.8331 59.1997 25.8667 120.109 -38.3992C181.018 -102.665 242.493 -81.7172 303.42 -146.002C364.346 -210.286 302.888 -231.252 363.815 -295.537C424.741 -359.821 486.199 -338.855 547.143 -403.158C608.087 -467.461 546.612 -488.409 607.538 -552.693M644.021 479.623C704.947 415.338 766.405 436.305 827.332 372.02C888.258 307.736 826.8 286.77 887.709 222.504C948.618 158.238 1010.09 179.186 1071.02 114.901C1131.95 50.6169 1070.49 29.6505 1131.42 -34.6339C1192.34 -98.9184 1253.8 -77.952 1314.74 -142.255C1375.69 -206.558 1314.21 -227.506 1375.14 -291.79M254.294 346.872C315.22 282.588 376.678 303.554 437.605 239.27C498.531 174.985 437.073 154.019 497.982 89.7529C558.891 25.487 620.367 46.4349 681.293 -17.8495C742.22 -82.1339 680.762 -103.1 741.688 -167.385C802.615 -231.669 864.073 -210.703 925.017 -275.006C985.961 -339.309 924.485 -360.256 985.412 -424.541M1023.09 613.348C1084.01 549.063 1145.47 570.03 1206.4 505.745C1267.33 441.461 1205.87 420.494 1266.78 356.228C1327.69 291.962 1389.16 312.91 1450.09 248.626C1511.01 184.342 1449.56 163.375 1510.48 99.0907C1571.41 34.8063 1632.87 55.7727 1693.81 -8.53017C1754.75 -72.8331 1693.28 -93.781 1754.21 -158.065M65.3467 288.944C126.273 224.659 187.731 245.626 248.658 181.341C309.584 117.057 248.126 96.0904 309.035 31.8245C369.944 -32.4415 431.42 -11.4935 492.346 -75.778C553.273 -140.062 491.815 -161.029 552.741 -225.313C613.668 -289.598 675.125 -268.631 736.069 -332.934C797.013 -397.237 735.538 -418.185 796.465 -482.469M831.469 549.437C892.395 485.152 953.853 506.119 1014.78 441.834C1075.71 377.55 1014.25 356.583 1075.16 292.317C1136.07 228.051 1197.54 248.999 1258.47 184.715C1319.39 120.431 1257.94 99.4641 1318.86 35.1797C1379.79 -29.1047 1441.25 -8.1383 1502.19 -72.4412C1563.14 -136.744 1501.66 -157.692 1562.59 -221.976M443.22 417.096C504.147 352.811 565.604 373.778 626.531 309.493C687.457 245.209 626 224.243 686.909 159.977C747.817 95.7107 809.293 116.659 870.219 52.3743C931.146 -11.9102 869.688 -32.8765 930.614 -97.1609C991.541 -161.445 1053 -140.479 1113.94 -204.782C1174.89 -269.085 1113.41 -290.033 1174.34 -354.317M1212.01 683.571C1272.94 619.287 1334.4 640.253 1395.33 575.969C1456.25 511.685 1394.79 490.718 1455.7 426.452C1516.61 362.186 1578.09 383.134 1639.01 318.85C1699.94 254.565 1638.48 233.599 1699.41 169.315C1760.34 105.03 1821.79 125.996 1882.74 61.6935C1943.68 -2.60936 1882.21 -23.5572 1943.13 -87.8417M-151.323 205.367C-90.3965 141.082 -28.9386 162.049 31.9879 97.7645C92.9144 33.48 31.4564 12.5136 92.3654 -51.7523C153.274 -116.018 214.75 -95.0703 275.676 -159.355C336.603 -223.639 275.145 -244.606 336.071 -308.89C396.998 -373.174 458.456 -352.208 519.4 -416.511C580.344 -480.814 518.868 -501.762 579.795 -566.046M616.278 466.27C677.205 401.985 738.663 422.952 799.589 358.667C860.516 294.383 799.058 273.416 859.967 209.15C920.876 144.884 982.351 165.832 1043.28 101.548C1104.2 37.2636 1042.75 16.2972 1103.67 -47.9872C1164.6 -112.272 1226.06 -91.3052 1287 -155.608C1347.95 -219.911 1286.47 -240.859 1347.4 -305.143M226.551 333.519C287.477 269.235 348.935 290.201 409.862 225.917C470.788 161.632 409.33 140.666 470.239 76.3998C531.148 12.1339 592.624 33.0818 653.55 -31.2026C714.477 -95.487 653.019 -116.453 713.945 -180.738C774.872 -245.022 836.33 -224.056 897.274 -288.359C958.218 -352.662 896.742 -373.61 957.669 -437.894M995.345 599.994C1056.27 535.71 1117.73 556.677 1178.66 492.392C1239.58 428.108 1178.12 407.141 1239.03 342.875C1299.94 278.609 1361.42 299.557 1422.34 235.273C1483.27 170.989 1421.81 150.022 1482.74 85.7377C1543.67 21.4532 1605.12 42.4197 1666.07 -21.8833C1727.01 -86.1862 1665.54 -107.134 1726.46 -171.419M37.6034 275.59C98.5299 211.306 159.988 232.272 220.914 167.988C281.841 103.704 220.383 82.7372 281.292 18.4713C342.201 -45.7946 403.676 -24.8467 464.603 -89.1311C525.529 -153.416 464.071 -174.382 524.998 -238.666C585.924 -302.951 647.382 -281.984 708.326 -346.287C769.27 -410.59 707.795 -431.538 768.721 -495.822M803.726 536.083C864.652 471.799 926.11 492.765 987.037 428.481C1047.96 364.197 986.505 343.23 1047.41 278.964C1108.32 214.698 1169.8 235.646 1230.73 171.362C1291.65 107.077 1230.19 86.1109 1291.12 21.8265C1352.05 -42.4579 1413.5 -21.4915 1474.45 -85.7944C1535.39 -150.097 1473.92 -171.045 1534.84 -235.33M415.477 403.743C476.404 339.458 537.862 360.425 598.788 296.14C659.715 231.856 598.257 210.889 659.166 146.623C720.075 82.3576 781.55 103.305 842.477 39.0211C903.403 -25.2634 841.945 -46.2297 902.872 -110.514C963.798 -174.799 1025.26 -153.832 1086.2 -218.135C1147.14 -282.438 1085.67 -303.386 1146.6 -367.67M1184.27 670.218C1245.2 605.934 1306.66 626.9 1367.58 562.616C1428.51 498.332 1367.05 477.365 1427.96 413.099C1488.87 348.833 1550.34 369.781 1611.27 305.497C1672.2 241.212 1610.74 220.246 1671.67 155.961C1732.59 91.6771 1794.05 112.643 1854.99 48.3405C1915.94 -15.9624 1854.46 -36.9103 1915.39 -101.195M-222.133 183.842C-161.207 119.557 -99.7489 140.524 -38.8224 76.2394C22.1041 11.955 -39.3538 -9.01146 21.5551 -73.2774C82.4641 -137.543 143.94 -116.595 204.866 -180.88C265.793 -245.164 204.335 -266.131 265.261 -330.415C326.188 -394.699 387.645 -373.733 448.589 -438.036C509.534 -502.339 448.058 -523.287 508.985 -587.571M545.468 444.745C606.394 380.46 667.852 401.427 728.779 337.142C789.705 272.858 728.247 251.891 789.156 187.625C850.065 123.359 911.541 144.307 972.467 80.0229C1033.39 15.7385 971.935 -5.22783 1032.86 -69.5122C1093.79 -133.797 1155.25 -112.83 1216.19 -177.133C1277.13 -241.436 1215.66 -262.384 1276.59 -326.668M158.412 317.977C219.339 253.692 280.797 274.659 341.723 210.374C402.65 146.09 341.192 125.123 402.101 60.8575C463.01 -3.40841 524.485 17.5395 585.412 -46.7449C646.338 -111.029 584.88 -131.996 645.807 -196.28C706.733 -260.565 768.191 -239.598 829.135 -303.901C890.079 -368.204 828.604 -389.152 889.53 -453.436M924.535 578.469C985.461 514.185 1046.92 535.151 1107.85 470.867C1168.77 406.583 1107.31 385.616 1168.22 321.35C1229.13 257.084 1290.61 278.032 1351.53 213.748C1412.46 149.463 1351 128.497 1411.93 64.2126C1472.86 -0.0718157 1534.31 20.8946 1595.26 -43.4083C1656.2 -107.711 1594.73 -128.659 1655.65 -192.944M-33.2072 254.066C27.7192 189.781 89.1772 210.748 150.104 146.463C211.03 82.1787 149.572 61.2123 210.481 -3.05365C271.39 -67.3196 332.866 -46.3716 393.792 -110.656C454.719 -174.94 393.261 -195.907 454.187 -260.191C515.114 -324.476 576.572 -303.509 637.516 -367.812C698.46 -432.115 636.984 -453.063 697.911 -517.347M734.394 514.968C795.321 450.684 856.779 471.65 917.705 407.366C978.632 343.082 917.174 322.115 978.083 257.849C1038.99 193.583 1100.47 214.531 1161.39 150.247C1222.32 85.9623 1160.86 64.9959 1221.79 0.711514C1282.71 -63.5729 1344.17 -42.6065 1405.12 -106.909C1466.06 -171.212 1404.59 -192.16 1465.51 -256.445M344.667 382.218C405.593 317.933 467.051 338.9 527.977 274.615C588.904 210.331 527.446 189.365 588.355 125.099C649.264 60.8327 710.739 81.7806 771.666 17.4962C832.592 -46.7882 771.134 -67.7546 832.061 -132.039C892.987 -196.323 954.445 -175.357 1015.39 -239.66C1076.33 -303.963 1014.86 -324.911 1075.78 -389.195M1113.46 648.693C1174.39 584.409 1235.84 605.375 1296.77 541.091C1357.7 476.807 1296.24 455.84 1357.15 391.574C1418.06 327.308 1479.53 348.256 1540.46 283.972C1601.39 219.687 1539.93 198.721 1600.85 134.436C1661.78 70.1521 1723.24 91.1184 1784.18 26.8155C1845.13 -37.4874 1783.65 -58.4353 1844.58 -122.72M-92.8505 229.203C-31.9241 164.919 29.5338 185.885 90.4603 121.601C151.387 57.3164 89.9289 36.35 150.838 -27.9159C211.747 -92.1819 273.222 -71.2339 334.149 -135.518C395.075 -199.803 333.617 -220.769 394.544 -285.054C455.47 -349.338 516.928 -328.372 577.872 -392.674C638.816 -456.977 577.341 -477.925 638.267 -542.21M674.75 490.106C735.677 425.822 797.135 446.788 858.061 382.504C918.988 318.219 857.53 297.253 918.439 232.987C979.348 168.721 1040.82 189.669 1101.75 125.385C1162.68 61.1002 1101.22 40.1337 1162.14 -24.1507C1223.07 -88.4351 1284.53 -67.4687 1345.47 -131.772C1406.42 -196.075 1344.94 -217.022 1405.87 -281.307M285.023 357.355C345.949 293.071 407.407 314.038 468.334 249.753C529.26 185.469 467.802 164.502 528.711 100.236C589.62 35.9704 651.096 56.9183 712.022 -7.36609C772.949 -71.6505 711.491 -92.6169 772.417 -156.901C833.344 -221.186 894.802 -200.219 955.746 -264.522C1016.69 -328.825 955.214 -349.773 1016.14 -414.057M1053.82 623.831C1114.74 559.546 1176.2 580.513 1237.13 516.228C1298.05 451.944 1236.6 430.978 1297.51 366.712C1358.41 302.446 1419.89 323.394 1480.82 259.109C1541.74 194.825 1480.29 173.858 1541.21 109.574C1602.14 45.2896 1663.6 66.256 1724.54 1.95305C1785.48 -62.3499 1724.01 -83.2977 1784.94 -147.582M96.0755 299.427C157.002 235.143 218.46 256.109 279.386 191.825C340.313 127.54 278.855 106.574 339.764 42.3078C400.673 -21.9581 462.148 -1.01016 523.075 -65.2946C584.001 -129.579 522.543 -150.545 583.47 -214.83C644.396 -279.114 705.854 -258.148 766.798 -322.451C827.742 -386.754 766.267 -407.702 827.193 -471.986M862.198 559.92C923.124 495.635 984.582 516.602 1045.51 452.317C1106.43 388.033 1044.98 367.067 1105.89 302.801C1166.79 238.535 1228.27 259.483 1289.2 195.198C1350.12 130.914 1288.67 109.947 1349.59 45.663C1410.52 -18.6214 1471.98 2.34499 1532.92 -61.9579C1593.86 -126.261 1532.39 -147.209 1593.32 -211.493M473.949 427.579C534.876 363.295 596.334 384.261 657.26 319.977C718.187 255.692 656.729 234.726 717.638 170.46C778.547 106.194 840.022 127.142 900.949 62.8576C961.875 -1.42684 900.417 -22.3932 961.344 -86.6776C1022.27 -150.962 1083.73 -129.996 1144.67 -194.299C1205.62 -258.601 1144.14 -279.549 1205.07 -343.834M1242.74 694.055C1303.67 629.77 1365.13 650.737 1426.05 586.452C1486.98 522.168 1425.52 501.201 1486.43 436.936C1547.34 372.67 1608.82 393.618 1669.74 329.333C1730.67 265.049 1669.21 244.082 1730.14 179.798C1791.06 115.513 1852.52 136.48 1913.47 72.1769C1974.41 7.87402 1912.93 -13.0739 1973.86 -77.3583M313.938 371.734C374.864 307.45 436.322 328.416 497.249 264.132C558.175 199.848 496.717 178.881 557.626 114.615C618.535 50.3493 680.011 71.2972 740.937 7.01279C801.864 -57.2716 740.406 -78.238 801.332 -142.522C862.259 -206.807 923.716 -185.84 984.661 -250.143C1045.6 -314.446 984.129 -335.394 1045.06 -399.679M-252.862 173.358C-191.936 109.074 -130.478 130.04 -69.5512 65.7561C-8.62475 1.47167 -70.0827 -19.4948 -9.17371 -83.7607C51.7352 -148.027 113.211 -127.079 174.137 -191.363C235.064 -255.648 173.606 -276.614 234.532 -340.898C295.459 -405.183 356.917 -384.216 417.861 -448.519C478.805 -512.822 417.329 -533.77 478.256 -598.054M514.739 434.261C575.665 369.977 637.123 390.943 698.05 326.659C758.976 262.374 697.518 241.408 758.427 177.142C819.336 112.876 880.812 133.824 941.738 69.5396C1002.66 5.25523 941.207 -15.7111 1002.13 -79.9956C1063.06 -144.28 1124.52 -123.314 1185.46 -187.616C1246.41 -251.919 1184.93 -272.867 1245.86 -337.152M127.683 307.493C188.61 243.209 250.068 264.175 310.994 199.891C371.921 135.606 310.463 114.64 371.372 50.3741C432.281 -13.8918 493.756 7.05612 554.683 -57.2283C615.609 -121.513 554.151 -142.479 615.078 -206.763C676.004 -271.048 737.462 -250.082 798.406 -314.384C859.35 -378.687 797.875 -399.635 858.801 -463.92M893.806 567.986C954.732 503.702 1016.19 524.668 1077.12 460.384C1138.04 396.099 1076.59 375.133 1137.49 310.867C1198.4 246.601 1259.88 267.549 1320.81 203.265C1381.73 138.98 1320.27 118.014 1381.2 53.7294C1442.13 -10.555 1503.58 10.4114 1564.53 -53.8915C1625.47 -118.194 1564 -139.142 1624.92 -203.427M-63.9361 243.582C-3.00959 179.298 58.4483 200.264 119.375 135.98C180.301 71.6954 118.843 50.7289 179.752 -13.537C240.661 -77.8029 302.137 -56.855 363.063 -121.139C423.99 -185.424 362.532 -206.39 423.458 -270.675C484.385 -334.959 545.843 -313.993 606.787 -378.296C667.731 -442.598 606.255 -463.546 667.182 -527.831M703.664 504.485C764.591 440.201 826.049 461.167 886.975 396.883C947.902 332.598 886.444 311.632 947.353 247.366C1008.26 183.1 1069.74 204.048 1130.66 139.763C1191.59 75.4791 1130.13 54.5127 1191.06 -9.77175C1251.99 -74.0562 1313.44 -53.0898 1374.39 -117.393C1435.33 -181.696 1373.86 -202.644 1434.78 -266.928M-182.052 194.883C-121.125 130.599 -59.6675 151.565 1.25901 87.281C62.1855 22.9966 0.727589 2.03018 61.6365 -62.2357C122.546 -126.502 184.021 -105.554 244.947 -169.838C305.874 -234.123 244.416 -255.089 305.342 -319.373C366.269 -383.658 427.727 -362.691 488.671 -426.994C549.615 -491.297 488.14 -512.245 549.066 -576.53M585.549 455.786C646.476 391.502 707.934 412.468 768.86 348.184C829.787 283.899 768.329 262.933 829.238 198.667C890.147 134.401 951.622 155.349 1012.55 91.0645C1073.48 26.7801 1012.02 5.81374 1072.94 -58.4707C1133.87 -122.755 1195.33 -101.789 1256.27 -166.092C1317.22 -230.395 1255.74 -251.342 1316.67 -315.627M195.822 323.036C256.748 258.751 318.206 279.718 379.133 215.433C440.059 151.149 378.601 130.182 439.51 65.9164C500.419 1.6505 561.895 22.5984 622.821 -41.686C683.748 -105.97 622.29 -126.937 683.216 -191.221C744.143 -255.506 805.601 -234.539 866.545 -298.842C927.489 -363.145 866.013 -384.093 926.94 -448.377M964.616 589.511C1025.54 525.227 1087 546.193 1147.93 481.909C1208.85 417.624 1147.4 396.658 1208.3 332.392C1269.21 268.126 1330.69 289.074 1391.62 224.79C1452.54 160.505 1391.08 139.539 1452.01 75.2543C1512.94 10.9699 1574.39 31.9363 1635.34 -32.3666C1696.28 -96.6695 1634.81 -117.617 1695.73 -181.902M6.87421 265.107C67.8007 200.823 129.259 221.789 190.185 157.505C251.112 93.2204 189.654 72.254 250.563 7.98809C311.472 -56.2778 372.947 -35.3299 433.874 -99.6143C494.8 -163.899 433.342 -184.865 494.269 -249.15C555.195 -313.434 616.653 -292.468 677.597 -356.77C738.541 -421.073 677.066 -442.021 737.992 -506.306M772.997 525.6C833.923 461.315 895.381 482.282 956.308 417.997C1017.23 353.713 955.776 332.747 1016.69 268.481C1077.59 204.215 1139.07 225.163 1200 160.878C1260.92 96.5939 1199.46 75.6275 1260.39 11.3431C1321.32 -52.9413 1382.78 -31.975 1443.72 -96.2779C1504.66 -160.581 1443.19 -181.529 1504.11 -245.813M384.748 393.259C445.674 328.975 507.132 349.941 568.059 285.657C628.985 221.373 567.527 200.406 628.436 136.14C689.345 71.8743 750.821 92.8222 811.747 28.5378C872.674 -35.7466 811.216 -56.7129 872.142 -120.997C933.069 -185.282 994.527 -164.315 1055.47 -228.618C1116.41 -292.921 1054.94 -313.869 1115.87 -378.154M1153.54 659.735C1214.47 595.45 1275.93 616.417 1336.85 552.132C1397.78 487.848 1336.32 466.881 1397.23 402.616C1458.14 338.35 1519.62 359.298 1580.54 295.013C1641.47 230.729 1580.01 209.762 1640.94 145.478C1701.86 81.1935 1763.32 102.16 1824.27 37.857C1885.21 -26.4459 1823.73 -47.3938 1884.66 -111.678" stroke="#F5F5F5" stroke-width="1.94013" stroke-miterlimit="10"/>
            </svg>

        <div className={styles.searchBox}>

            <div className={styles.firstTextBox}>
                <svg className={styles.locationIcon} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <path d="M15.0026 14.8316C15.6245 14.8316 16.1562 14.6101 16.5976 14.1672C17.0393 13.7243 17.2601 13.1919 17.2601 12.57C17.2601 11.9481 17.0387 11.4164 16.5957 10.9747C16.1528 10.5332 15.6203 10.3125 14.9982 10.3125C14.3764 10.3125 13.8447 10.534 13.4032 10.9769C12.9616 11.4198 12.7407 11.9523 12.7407 12.5744C12.7407 13.1962 12.9622 13.7279 13.4051 14.1694C13.848 14.6108 14.3805 14.8316 15.0026 14.8316ZM15.0004 24.3919C17.4458 22.2027 19.3172 20.1029 20.6145 18.0925C21.9118 16.0821 22.5604 14.3212 22.5604 12.81C22.5604 10.5312 21.8365 8.65792 20.3886 7.19C18.9406 5.72208 17.1446 4.98812 15.0004 4.98812C12.8563 4.98812 11.0602 5.72208 9.6123 7.19C8.16439 8.65792 7.44043 10.5312 7.44043 12.81C7.44043 14.3212 8.08908 16.0821 9.38637 18.0925C10.6837 20.1029 12.555 22.2027 15.0004 24.3919ZM15.0004 26.8869C11.8546 24.161 9.49564 21.6243 7.92355 19.2766C6.35147 16.9286 5.56543 14.7731 5.56543 12.81C5.56543 9.92542 6.49845 7.5901 8.36449 5.80406C10.2307 4.01802 12.4427 3.125 15.0004 3.125C17.5581 3.125 19.7701 4.01802 21.6364 5.80406C23.5024 7.5901 24.4354 9.92542 24.4354 12.81C24.4354 14.7731 23.6494 16.9286 22.0773 19.2766C20.5052 21.6243 18.1463 24.161 15.0004 26.8869Z" fill="#006E5E" />
                </svg>

                <svg className={styles.searchIcon} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <path d="M24.4277 25.7213L16.5768 17.87C15.9518 18.3861 15.233 18.7899 14.4205 19.0816C13.608 19.3733 12.7675 19.5191 11.8989 19.5191C9.76249 19.5191 7.95436 18.7794 6.47457 17.3C4.99478 15.8206 4.25488 14.0129 4.25488 11.8769C4.25488 9.74106 4.99457 7.93273 6.47395 6.45189C7.95332 4.97127 9.76103 4.23096 11.8971 4.23096C14.0329 4.23096 15.8412 4.97085 17.3221 6.45064C18.8027 7.93044 19.543 9.73856 19.543 11.875C19.543 12.7677 19.3932 13.6203 19.0936 14.4328C18.7938 15.2453 18.3939 15.952 17.8939 16.5528L25.7449 24.4038L24.4277 25.7213ZM11.8989 17.6444C13.5096 17.6444 14.8737 17.0854 15.9914 15.9675C17.1094 14.8498 17.6683 13.4856 17.6683 11.875C17.6683 10.2644 17.1094 8.90023 15.9914 7.78252C14.8737 6.6646 13.5096 6.10564 11.8989 6.10564C10.2883 6.10564 8.92415 6.6646 7.80645 7.78252C6.68853 8.90023 6.12957 10.2644 6.12957 11.875C6.12957 13.4856 6.68853 14.8498 7.80645 15.9675C8.92415 17.0854 10.2883 17.6444 11.8989 17.6444Z" fill="#FEBE43"/>
                </svg>

                <div className={styles.textBox}>
                    {/* <input className={styles.whereTo} type="text" placeholder="Where to?"/> */}
                    <p className={styles.whereTo}>Where to?</p>
                    <p className={styles.karachiPakistan}>Karachi,Pakistan </p> <br />
                    <p className={styles.anyWhere}>  Anywhere | Any week | Add guests </p>
                </div>
                {/* <input  type="text" placeholder="Where to "/> */}

            </div>

            <div className={styles.secondTextBox}>

                <svg className={styles.datesIcon} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <path d="M11.25 20.0717C10.4471 20.0717 9.76562 19.7916 9.20562 19.2314C8.64542 18.6714 8.36531 17.9899 8.36531 17.187C8.36531 16.3841 8.64542 15.7027 9.20562 15.1427C9.76562 14.5824 10.4471 14.3023 11.25 14.3023C12.0529 14.3023 12.7344 14.5824 13.2944 15.1427C13.8546 15.7027 14.1347 16.3841 14.1347 17.187C14.1347 17.9899 13.8546 18.6714 13.2944 19.2314C12.7344 19.7916 12.0529 20.0717 11.25 20.0717ZM6.63469 26.8745C6.00323 26.8745 5.46875 26.6558 5.03125 26.2183C4.59375 25.7808 4.375 25.2463 4.375 24.6148V7.88422C4.375 7.25276 4.59375 6.71828 5.03125 6.28078C5.46875 5.84328 6.00323 5.62453 6.63469 5.62453H8.36531V2.98047H10.2884V5.62453H19.7597V2.98047H21.6347V5.62453H23.3653C23.9968 5.62453 24.5312 5.84328 24.9688 6.28078C25.4062 6.71828 25.625 7.25276 25.625 7.88422V24.6148C25.625 25.2463 25.4062 25.7808 24.9688 26.2183C24.5312 26.6558 23.9968 26.8745 23.3653 26.8745H6.63469ZM6.63469 24.9995H23.3653C23.4616 24.9995 23.5497 24.9594 23.6297 24.8792C23.7099 24.7992 23.75 24.7111 23.75 24.6148V12.8842H6.25V24.6148C6.25 24.7111 6.2901 24.7992 6.37031 24.8792C6.45031 24.9594 6.53844 24.9995 6.63469 24.9995ZM6.25 11.0092H23.75V7.88422C23.75 7.78797 23.7099 7.69984 23.6297 7.61984C23.5497 7.53963 23.4616 7.49953 23.3653 7.49953H6.63469C6.53844 7.49953 6.45031 7.53963 6.37031 7.61984C6.2901 7.69984 6.25 7.78797 6.25 7.88422V11.0092Z" fill="#006E5E" />
                </svg>
                <div className={styles.textBox2}>
                    <p className={styles.whereTo}>Dates</p>
                    <p className={styles.karachiPakistan}>Nov 3 - Nov 4 </p> <br />
                </div>
                {/* <input  type="text" placeholder="Where to "/> */}


            </div>

            <div className={styles.secondTextBox}>

                <svg className={styles.profileIcon} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <path d="M15 14.6152C13.7969 14.6152 12.767 14.1869 11.9103 13.3302C11.0534 12.4734 10.625 11.4434 10.625 10.2402C10.625 9.03711 11.0534 8.00721 11.9103 7.15055C12.767 6.29367 13.7969 5.86523 15 5.86523C16.2031 5.86523 17.233 6.29367 18.0897 7.15055C18.9466 8.00721 19.375 9.03711 19.375 10.2402C19.375 11.4434 18.9466 12.4734 18.0897 13.3302C17.233 14.1869 16.2031 14.6152 15 14.6152ZM5.625 24.1346V21.3555C5.625 20.7435 5.79125 20.1766 6.12375 19.6549C6.45625 19.1333 6.90062 18.7322 7.45687 18.4518C8.69229 17.8462 9.93865 17.3919 11.1959 17.089C12.4532 16.7861 13.7213 16.6346 15 16.6346C16.2787 16.6346 17.5468 16.7861 18.8041 17.089C20.0614 17.3919 21.3077 17.8462 22.5431 18.4518C23.0994 18.7322 23.5437 19.1333 23.8762 19.6549C24.2087 20.1766 24.375 20.7435 24.375 21.3555V24.1346H5.625ZM7.5 22.2596H22.5V21.3555C22.5 21.1024 22.4267 20.868 22.28 20.6524C22.1333 20.437 21.9343 20.2612 21.6828 20.1249C20.6057 19.5945 19.5076 19.1926 18.3884 18.9193C17.2691 18.6462 16.1396 18.5096 15 18.5096C13.8604 18.5096 12.7309 18.6462 11.6116 18.9193C10.4924 19.1926 9.39427 19.5945 8.31719 20.1249C8.06573 20.2612 7.86667 20.437 7.72 20.6524C7.57333 20.868 7.5 21.1024 7.5 21.3555V22.2596ZM15 12.7402C15.6875 12.7402 16.276 12.4954 16.7656 12.0059C17.2552 11.5163 17.5 10.9277 17.5 10.2402C17.5 9.55273 17.2552 8.96419 16.7656 8.47461C16.276 7.98503 15.6875 7.74023 15 7.74023C14.3125 7.74023 13.724 7.98503 13.2344 8.47461C12.7448 8.96419 12.5 9.55273 12.5 10.2402C12.5 10.9277 12.7448 11.5163 13.2344 12.0059C13.724 12.4954 14.3125 12.7402 15 12.7402Z" fill="#006E5E" />
                </svg>
                
                <div className={styles.textBox3}>
                    <p className={styles.whereTo}>Travellers</p>
                    <p className={styles.karachiPakistan}>2 travelers, 1 room</p> <br />
                </div>
                {/* <input  type="text" placeholder="Where to "/> */}

            </div>
            
            <div className={styles.searchDiv}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <path d="M24.4277 25.7208L16.5768 17.8695C15.9518 18.3856 15.233 18.7894 14.4205 19.0811C13.608 19.3728 12.7675 19.5186 11.8989 19.5186C9.76249 19.5186 7.95436 18.7789 6.47457 17.2995C4.99478 15.8202 4.25488 14.0124 4.25488 11.8764C4.25488 9.74057 4.99457 7.93224 6.47395 6.45141C7.95332 4.97078 9.76103 4.23047 11.8971 4.23047C14.0329 4.23047 15.8412 4.97036 17.3221 6.45016C18.8027 7.92995 19.543 9.73807 19.543 11.8745C19.543 12.7672 19.3932 13.6198 19.0936 14.4323C18.7938 15.2448 18.3939 15.9515 17.8939 16.5523L25.7449 24.4033L24.4277 25.7208ZM11.8989 17.6439C13.5096 17.6439 14.8737 17.0849 15.9914 15.967C17.1094 14.8493 17.6683 13.4852 17.6683 11.8745C17.6683 10.2639 17.1094 8.89974 15.9914 7.78203C14.8737 6.66411 13.5096 6.10516 11.8989 6.10516C10.2883 6.10516 8.92415 6.66411 7.80645 7.78203C6.68853 8.89974 6.12957 10.2639 6.12957 11.8745C6.12957 13.4852 6.68853 14.8493 7.80645 15.967C8.92415 17.0849 10.2883 17.6439 11.8989 17.6439Z" fill="white"/>
                </svg>
            </div>

            <div className={styles.settings}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M10.7832 21V15.25H12.45V17.3H21V18.9668H12.45V21H10.7832ZM3 18.9668V17.3H9.11675V18.9668H3ZM7.45 14.8668V12.8333H3V11.1667H7.45V9.1H9.11675V14.8668H7.45ZM10.7832 12.8333V11.1667H21V12.8333H10.7832ZM14.8833 8.75V3H16.55V5.03325H21V6.7H16.55V8.75H14.8833ZM3 6.7V5.03325H13.2168V6.7H3Z" fill="#424242"/>
                </svg>
            </div>

        </div>

        </div>
    )
}