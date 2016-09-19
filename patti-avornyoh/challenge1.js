*1 Write a function called billTotal that can be used to calculate the total to be paid at a restaurant -- including tip and tax -- given the subtotal (i.e. cost of food and drinks). We can assume that the tip will be 15% and tax will be 9.5%. Make sure that the tip does not include the tax!
<answer>
function billtotal (subtotal) {
      var = subtotal + .15 * subtotal + .095 * subtotal;
      return;
   }
   </answer>
  *2 Implement the function called animalNoise that accepts two parameters: a type of animal and an emotion that indicates that animal's current emotional state. Based on the combination of animal and emotion, animalNoise should return an appropriate noise (represented as a string). The function should work with at least two different animals and emotions.
   <answer1>
   function animalNoise(animal, emotion) {
      if (animal === "duck"){
         if (emotion === "happy"){
            return "quack, quack";
         }
if (animal === "horse"){
         if (emotion === "happy"){
            return "neigh,neigh";
         }
</answer1>
*3 The digital sum of a number is the sum of all its digits, e.g. digitalSum(1337) should output 14: 1 + 3 + 3 + 7. Use any of the methods of reptition that we have covered so far to implement this function.
<answer2>
