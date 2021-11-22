let fact1Popup;

// Open the popup when we enter a given zone
fact1Popup = WA.room.onEnterZone('fact1Zone', () => {
    WA.ui.openPopup('popin', 
    	"Nonobstant la dégradation de l'époque actuelle, il ne faut pas négliger d'uniformiser les principales issues déclinables, pour le futur.", 
	[{
        label: "Fermer",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});

// Close the popup when we leave the zone.
WA.room.onLeaveZone('fact1Zone', () => {
    fact1Popup.close();
});