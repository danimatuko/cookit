import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Rise1',
      `Lorem ipsum dolor sit amet consectetur adipiscing, elit himenaeos velit nulla. Mollis mauris platea sed per primis id blandit leo, porttitor vestibulum quam volutpat dis pharetra neque mi non, in lacinia habitant duis risus at congue. Sed quisque cum ridiculus sem litora rutrum suscipit placerat orci, senectus metus maecenas nam etiam platea montes.

      Malesuada platea taciti iaculis rhoncus accumsan primis scelerisque ornare mauris lobortis, cras nostra semper eros consequat in neque curabitur diam, suscipit laoreet leo purus justo magna sed commodo est. Suspendisse pulvinar congue pretium posuere sodales vulputate feugiat primis mauris, velit ac convallis nullam et class imperdiet leo. Natoque odio id nam torquent taciti ultricies scelerisque mollis neque, habitasse enim fames sociosqu viverra porttitor interdum orci dignissim commodo, elementum donec senectus sodales bibendum varius eu morbi. Tempus augue id mi per curabitur etiam vulputate porttitor euismod, ornare dis risus semper interdum nostra tellus. Leo ligula orci taciti penatibus eu lectus tellus pharetra rhoncus purus, senectus torquent semper lacus ac cum nascetur quis fermentum eleifend ultrices, fringilla et vehicula ut integer ante dis condimentum est.`,
      'https://images.pexels.com/photos/7964669/pexels-photo-7964669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ),
    new Recipe(
      'Rise2',
      `Lorem ipsum dolor sit amet consectetur adipiscing elit sollicitudin ullamcorper, cursus fames aliquet integer sociosqu fusce nascetur semper dictum hendrerit, dictumst mollis dignissim aenean porttitor magna magnis dis. Magna parturient pharetra proin nunc pulvinar commodo duis ornare, aptent porta molestie non varius velit senectus aliquet lacus, condimentum et aliquam imperdiet fringilla nibh tempus. Et duis sollicitudin suspendisse varius, mattis fames molestie, metus nascetur risus. Class facilisi vitae ornare taciti neque curae cubilia faucibus libero, congue nec dictum aliquam torquent nullam aptent eu, ridiculus nunc malesuada sodales accumsan blandit cursus cras.

      Sapien dignissim eu proin euismod ultrices mauris aliquam aptent felis parturient interdum, facilisis tellus laoreet conubia porta at blandit tincidunt sociosqu. Eu velit volutpat iaculis dapibus curabitur dictum himenaeos habitasse, maecenas eleifend vehicula sociosqu hendrerit aptent ante nibh nisi, natoque phasellus netus nostra convallis lobortis mauris. Neque potenti litora venenatis curae massa sem, erat id libero rutrum at tristique magnis, nisl tincidunt fringilla a maecenas.`,
      'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ),
  ];
}
