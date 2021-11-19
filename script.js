WA.chat.sendChatMessage('Hello world', 'Mr Robot');

let fact1Popup;

// Open the popup when we enter a given zone
fact1Popup = WA.room.onEnterZone('fact1Zone', () => {
    WA.ui.openPopup('popinCore1', 'Hello world!', [{
        label: "Close",
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