# Benefits cards refactorization

## Overview

In data.js, in const benefits, change these:

ro: "Livrare rapidă",
with
ro: "Termene predictibile"

roD: "Site-ul tău este gata în 7–14 zile, nu în luni de zile."
with
roD: "Știi de la început etapele proiectului și termenul estimat de livrare."

end: "Fast delivery"
with
end: "Clear Timeline"

enD: "Your site is ready in 7–14 days, not months."
with 
enD: "You know the project stages and estimated delivery timeline from the start."

 roD: 'Tehnologii moderne, securitate și performanță, ca site-ul să meargă ani de zile.',
 with
 roD: 'Tehnologii moderne, securitate și performanță, ca site-ul să functioneze ani de zile.',

## Requirements

 - Check the grammar in eng and the diacritics
 - Do not translate word-for-word from ro to eng or from eng to ro
 - Verify that changes are not affecting the layout and styles.
 - Make icons smooth moving as cards in Services section
 - Make top borders --primary 
 - Add a subtle hover animation to the cards.Lift the card slightly on hover using transform and transition. Reuse the same card styles and CSS classes used by the Services cards instead of creating new ones.

## References

- @context/project-overview.md

