import { Component, OnInit } from '@angular/core';
import { Category } from '../../interfaces/Category';
import { Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-rating-and-feedback',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './rating-and-feedback.component.html',
  styleUrl: './rating-and-feedback.component.css',
})
export class RatingAndFeedbackComponent implements OnInit {
  checkedCategories: Category[] = [];
  activeCategoryIdx: number = 0;
  activeSubCategoryIdx: number = 0;
  activeCategory!: Category;

  constructor(private router: Router) {}

  ngOnInit() {
    const checkedCategories = JSON.parse(
      localStorage.getItem('checkedCategories') || '[]'
    );

    if (!checkedCategories.length) {
      this.router.navigate(['/home']);
    }

    this.checkedCategories = checkedCategories.map((cat: any) => {
      const subCategories = cat.subCategories.filter(
        (subCat: any) => subCat.checked
      );

      return {
        ...cat,
        subCategories,
      };
    });

    this.activeCategory = this.checkedCategories[this.activeCategoryIdx];
  }

  handlePreviousClick() {
    let finalSubCategoryIdx = this.activeCategory.subCategories?.length - 1;

    if (this.activeSubCategoryIdx === 0 && this.activeCategoryIdx > 0) {
      this.activeCategoryIdx -= 1;
      this.activeCategory = this.checkedCategories[this.activeCategoryIdx];

      if (this.activeCategory.subCategories) {
        finalSubCategoryIdx = this.activeCategory.subCategories?.length - 1;
        this.activeSubCategoryIdx = finalSubCategoryIdx;
      }
    } else if (
      this.activeSubCategoryIdx > 0 &&
      this.activeSubCategoryIdx <= finalSubCategoryIdx
    ) {
      this.activeSubCategoryIdx -= 1;
    }
  }

  handleNextClick() {
    const finalCategoryIdx = this.checkedCategories.length - 1;
    const finalSubCategoryIdx = this.activeCategory.subCategories?.length - 1;

    if (this.activeSubCategoryIdx < finalSubCategoryIdx) {
      this.activeSubCategoryIdx += 1;
    } else if (
      this.activeSubCategoryIdx === finalSubCategoryIdx &&
      this.activeCategoryIdx < finalCategoryIdx
    ) {
      this.activeCategoryIdx += 1;
      this.activeSubCategoryIdx = 0;
      this.activeCategory = this.checkedCategories[this.activeCategoryIdx];
    }
  }
}
