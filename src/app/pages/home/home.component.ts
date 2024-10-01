import { Component, OnInit } from '@angular/core';
import { Category } from '../../interfaces/Category';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormArray,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  categories: Category[] = [
    {
      name: 'Customer Service',
      checkAll: false,
      subCategories: [
        { name: 'Customer Satisfaction (CSAT)', checked: false },
        { name: 'Net Promoter Score (NPS)', checked: false },
        { name: 'Revenue Generation', checked: false },
        { name: 'Future Pipeline (Revenue Generation)', checked: false },
        { name: 'Churn Rate', checked: false },
      ],
    },
    {
      name: 'Finance & Accountability',
      checkAll: false,
      subCategories: [
        { name: 'Revenue & Profitability', checked: false },
        { name: 'Cash Flow', checked: false },
        { name: 'Liquidity & Solvency', checked: false },
        { name: 'Efficiency Ratio', checked: false },
        { name: 'Investment & Growth', checked: false },
        { name: 'Cost Management', checked: false },
        { name: 'Market Position & Competitiveness', checked: false },
        { name: 'Risk Management', checked: false },
        { name: 'Strategic Planning', checked: false },
        { name: 'Stakeholder Insights', checked: false },
      ],
    },
    {
      name: 'Sustainability & CSR',
      checkAll: false,
      subCategories: [
        { name: 'Carbon Footprint', checked: false },
        { name: 'Energy Consumption', checked: false },
        { name: 'Green IT', checked: false },
        { name: 'Waste Management', checked: false },
        { name: 'Sustainable Procurement', checked: false },
        { name: 'CSR', checked: false },
        { name: 'Community Impact', checked: false },
      ],
    },
    {
      name: 'Sales & Marketing',
      checkAll: false,
      subCategories: [
        { name: 'Lead Conversation Rate', checked: false },
        { name: 'Customer Acquisition Cost', checked: false },
        { name: 'Customer Lifetime Value', checked: false },
        { name: 'Sales Cycle Length', checked: false },
        { name: 'Marketing ROI', checked: false },
        { name: 'Customer Engagement Rate', checked: false },
        { name: 'Social Media Metrics', checked: false },
        { name: 'Campaign Marketing', checked: false },
      ],
    },
    {
      name: 'Innovation & Product Development',
      checkAll: false,
      subCategories: [
        { name: 'R&D Efficiency', checked: false },
        { name: 'Time to Market', checked: false },
        { name: 'Innovation Ratio', checked: false },
        { name: 'Customer Feedback', checked: false },
        { name: 'Feature Adoption Rate', checked: false },
        { name: 'Development Cost', checked: false },
        { name: 'Collaboration Efficiency', checked: false },
        { name: 'Patent Application & Approvals', checked: false },
      ],
    },
    {
      name: 'Marketing & Branding',
      checkAll: false,
      subCategories: [
        { name: 'Brand Awareness', checked: false },
        { name: 'Customer Engagement', checked: false },
        { name: 'Lead Generation', checked: false },
        { name: 'Customer Acquisition Cost', checked: false },
        { name: 'Return on Marketing Investment (ROMI)', checked: false },
      ],
    },
    {
      name: 'Human Resources',
      checkAll: false,
      subCategories: [
        { name: 'Time to Hire', checked: false },
        { name: 'Cost per Hire', checked: false },
        { name: 'Quality of Hire', checked: false },
        { name: 'Employee Retention Rate', checked: false },
        { name: 'Employee Engagement', checked: false },
        { name: 'Training & Development Effectiveness', checked: false },
        { name: 'Employee Productivity', checked: false },
        { name: 'Absenteeism Rate', checked: false },
        { name: 'Employee Satisfaction (ESAT)', checked: false },
        { name: 'Diversity and Inclusion Metrics', checked: false },
        { name: 'Performance Management', checked: false },
        { name: 'Internal Mobility Rate', checked: false },
        { name: 'Compliance and Risk Management', checked: false },
        { name: 'Employee Net Promoter Score (eNPS)', checked: false },
        { name: 'Onboarding Effectiveness', checked: false },
      ],
    },
    {
      name: 'Operations Management',
      checkAll: false,
      subCategories: [
        { name: 'Operational Efficiency', checked: false },
        { name: 'Capacity Utilization', checked: false },
        { name: 'Resource Utilization', checked: false },
        { name: 'Process Efficiency Metrics', checked: false },
        { name: 'Forecasting Accuracy', checked: false },
        { name: 'Order Fulfillment Service Efficiency', checked: false },
        { name: 'Supplier Chain Performance', checked: false },
        { name: 'IT System Performance', checked: false },
      ],
    },
    {
      name: 'IT & Cyber Security',
      checkAll: false,
      subCategories: [
        { name: 'Threat Detection Rate', checked: false },
        { name: 'Incident Response Time', checked: false },
        { name: 'Vulnerability Management', checked: false },
        { name: 'Security Incident Frequency', checked: false },
        { name: 'User Behavior Analytics', checked: false },
        { name: 'Compliance and Audit Readiness', checked: false },
        { name: 'System Uptime and Availability', checked: false },
      ],
    },
    {
      name: 'Supply Chain & Logistic',
      checkAll: false,
      subCategories: [
        { name: 'Inventory Management', checked: false },
        { name: 'Demand Forecasting & Accuracy', checked: false },
        { name: 'Order Fulfillment', checked: false },
        { name: 'Supply Chain Cost', checked: false },
        { name: 'Supplier Performance', checked: false },
        { name: 'Warehouse Operations', checked: false },
        { name: 'Logistics Efficiency', checked: false },
        { name: 'Risk Management', checked: false },
        { name: 'Technology Utilization', checked: false },
      ],
    },
    {
      name: 'Legal Operations',
      checkAll: false,
      subCategories: [
        { name: 'Contract Management', checked: false },
        { name: 'Legal Research Efficiency', checked: false },
        { name: 'Documentation Automation', checked: false },
        { name: 'Case Management', checked: false },
        { name: 'IP Governance', checked: false },
      ],
    },
    {
      name: 'Others',
      checkAll: false,
      subCategories: [],
    },
  ];

  constructor(private router: Router) {}

  handleCategoryChange(idx: number) {
    const category = this.categories[idx];

    category.checkAll = !category.checkAll;

    category.subCategories?.forEach((sub) => {
      sub.checked = category.checkAll;
    });
  }

  handleSubCategoryChange(idx: number, subCategory: string) {
    const category = this.categories[idx];

    category?.subCategories?.forEach((sub) => {
      if (sub.name === subCategory) {
        sub.checked = !sub.checked;
      }
    });
  }

  handleSubmit(e: SubmitEvent) {
    e.preventDefault();

    const checkedCategories: Category[] = this.categories.filter((cat) => {
      if (cat.checkAll) return true;

      const checkedSubCategories = cat.subCategories?.filter(
        (subCat) => subCat.checked
      );

      return checkedSubCategories?.length;
    });

    if (!checkedCategories.length) return;

    localStorage.setItem(
      'checkedCategories',
      JSON.stringify(checkedCategories)
    );

    this.router.navigate(['/feedback-submit']);
  }
}
