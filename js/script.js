// Initialize the responsive navigation
var nav = responsiveNav("#nav", {
    // Optional settings
    animate: true, // Toggle animation for opening/closing
    transition: 300, // Animation speed in milliseconds
    label: "Menu", // Text for the toggle button (screen reader friendly)
    insert: "after", // Insert the toggle button after the navigation element
    closeOnNavClick: true, // Close navigation when a link is clicked
  });
  