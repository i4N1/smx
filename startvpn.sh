#!/bin/bash

if [ $1 === "start" ]
then
	echo "[*] Iniciando VPN para Starting Point (htb)..."
	sudo openvpn /home/deagw/Downloads/starting_point_deagW.ovpn
else
	echo "[*] Inicando VPN para Labs (htb)..."
	sudo openvpn /home/deagw/Downloads/lab_deagW.ovpn
fi
