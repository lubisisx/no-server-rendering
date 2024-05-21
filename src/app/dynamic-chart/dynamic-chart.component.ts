import {
  Component,
  Inject,
  PLATFORM_ID,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { NgxEchartsModule, NGX_ECHARTS_CONFIG } from 'ngx-echarts';
import * as echarts from 'echarts';

@Component({
  selector: 'app-dynamic-chart',
  standalone: true,
  imports: [CommonModule, NgxEchartsModule],
  templateUrl: './dynamic-chart.component.html',
  styleUrls: ['./dynamic-chart.component.css'],
  providers: [
    {
      provide: NGX_ECHARTS_CONFIG,
      useValue: { echarts },
    },
  ],
})
export class DynamicChartComponent implements OnInit, AfterViewInit {
  @ViewChild('chartContainer', { static: false }) chartContainer!: ElementRef;

  colors: any = {
    starchy: '#f06f09',
    fruity: '#198f39',
    carrots: '#f5d311',
    solvent: '#6e2da1',
    sulphur: '#e71119',
    sweet: '#d12eb0',
    etherish: '#2e5294',
  };

  wheelOneData = [
    {
      name: 'Starchy',
      itemStyle: {
        color: this.colors.starchy,
      },
      children: [
        {
          name: 'Biscuit',
          value: 4.5,
          itemStyle: {
            color: this.colors.starchy,
          },
          children: [
            {
              name: '1',
              value: 1,
              parents: 'Starchy,Biscuit',
              itemStyle: {
                color: '#843c0c',
              },
            },
            {
              name: '1.5',
              value: 1.5,
              parents: 'Starchy,Biscuit',
              itemStyle: {
                color: '#ed7d31',
              },
            },
            {
              name: '2',
              value: 2,
              parents: 'Starchy,Biscuit',
              itemStyle: {
                color: '#f7b77f',
              },
            },
          ],
        },
        {
          name: 'Cereal',
          value: 4.5,
          itemStyle: {
            color: this.colors.starchy,
          },
          children: [
            {
              name: '1',
              value: 1,
              parents: 'Starchy,Cereal',
              itemStyle: {
                color: '#843c0c',
              },
            },
            {
              name: '1.5',
              value: 1.5,
              parents: 'Starchy,Cereal',
              itemStyle: {
                color: '#ed7d31',
              },
            },
            {
              name: '2',
              value: 2,
              parents: 'Starchy,Cereal',
              itemStyle: {
                color: '#f7b77f',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'Fruity',
      itemStyle: { color: this.colors.fruity },
      children: [
        {
          name: 'Acetaldehyde',
          value: 4.5,
          itemStyle: { color: this.colors.fruity },
          children: [
            {
              name: '1',
              value: 1,
              parents: 'Fruity,Acetaldehyde',
              itemStyle: { color: '#90a083' },
            },
            {
              name: '1.5',
              value: 1.5,
              parents: 'Fruity,Acetaldehyde',
              itemStyle: { color: '#048f3a' },
            },
            {
              name: '2',
              value: 2,
              parents: 'Fruity,Acetaldehyde',
              itemStyle: { color: '#50cf87' },
            },
          ],
        },
        {
          name: 'Fruity',
          value: 4.5,
          itemStyle: { color: this.colors.fruity },
          children: [
            {
              name: '1',
              value: 1,
              parents: 'Fruity,Fruity',
              itemStyle: { color: '#90a083' },
            },
            {
              name: '1.5',
              value: 1.5,
              parents: 'Fruity,Fruity',
              itemStyle: { color: '#048f3a' },
            },
            {
              name: '2',
              value: 2,
              parents: 'Fruity,Fruity',
              itemStyle: { color: '#50cf87' },
            },
          ],
        },
        {
          name: 'Estery',
          value: 4.5,
          itemStyle: { color: this.colors.fruity },
          children: [
            {
              name: '1',
              value: 1,
              parents: 'Fruity,Estery',
              itemStyle: { color: '#90a083' },
            },
            {
              name: '1.5',
              value: 1.5,
              parents: 'Fruity,Estery',
              itemStyle: { color: '#048f3a' },
            },
            {
              name: '2',
              value: 2,
              parents: 'Fruity,Estery',
              itemStyle: { color: '#50cf87' },
            },
          ],
        },
        {
          name: 'Fusel like',
          value: 4.5,
          itemStyle: { color: this.colors.fruity },
          children: [
            {
              name: '1',
              value: 1,
              parents: 'Fruity,Fusel like',
              itemStyle: { color: '#90a083' },
            },
            {
              name: '1.5',
              value: 1.5,
              parents: 'Fruity,Fusel like',
              itemStyle: { color: '#048f3a' },
            },
            {
              name: '2',
              value: 2,
              parents: 'Fruity,Fusel like',
              itemStyle: { color: '#50cf87' },
            },
          ],
        },
      ],
    },
    {
      name: 'Carrots',
      itemStyle: { color: this.colors.carrots },
      children: [
        {
          name: 'Carrots',
          value: 3.4,
          itemStyle: { color: this.colors.carrots },
          children: [
            {
              name: '<1',
              value: 0.9,
              parents: 'Carrots,Carrots',
              itemStyle: { color: '#ffc000' },
            },
            {
              name: '1',
              value: 1,
              parents: 'Carrots,Carrots',
              itemStyle: { color: '#f4d716' },
            },
            {
              name: '1.5',
              value: 1.5,
              parents: 'Carrots,Carrots',
              itemStyle: { color: '#f9eb8a' },
            },
          ],
        },
        {
          name: 'Sour',
          value: 3.4,
          parents: 'Carrots,Sour',
          itemStyle: { color: this.colors.carrots },
          children: [
            {
              name: '<1',
              value: 0.9,
              parents: 'Carrots,Sour',
              itemStyle: { color: '#ffc000' },
            },
            {
              name: '1',
              value: 1,
              parents: 'Carrots,Sour',
              itemStyle: { color: '#f4d716' },
            },
            {
              name: '1.5',
              value: 1.5,
              parents: 'Carrots,Sour',
              itemStyle: { color: '#f9eb8a' },
            },
          ],
        },
        {
          name: 'Aromatic',
          value: 3.4,
          itemStyle: { color: this.colors.carrots },
          children: [
            {
              name: '<1',
              value: 0.9,
              parents: 'Carrots,Aromatic',
              itemStyle: { color: '#ffc000' },
            },
            {
              name: '1',
              value: 1,
              parents: 'Carrots,Aromatic',
              itemStyle: { color: '#f4d716' },
            },
            {
              name: '1.5',
              value: 1.5,
              parents: 'Carrots,Aromatic',
              itemStyle: { color: '#f9eb8a' },
            },
          ],
        },
      ],
    },
    {
      name: 'Solvent',
      itemStyle: { color: this.colors.solvent },
      children: [
        {
          name: 'Paint like',
          value: 2.8,
          itemStyle: { color: this.colors.solvent },
          children: [
            {
              name: '1',
              value: 1,
              parents: 'Solvent,Paint like',
              itemStyle: { color: '#7030a0' },
            },
            {
              name: '<1',
              value: 0.9,
              parents: 'Solvent,Paint like',
              itemStyle: { color: '#9d55c9' },
            },
            {
              name: '<1',
              value: 0.9,
              parents: 'Solvent,Paint like',
              itemStyle: { color: '#9a6fbd' },
            },
          ],
        },
        {
          name: 'Plastic',
          value: 2.8,
          itemStyle: { color: this.colors.solvent },
          children: [
            {
              name: '1',
              value: 1,
              parents: 'Solvent,Plastic',
              itemStyle: { color: '#7030a0' },
            },
            {
              name: '<1',
              value: 0.9,
              parents: 'Solvent,Plastic',
              itemStyle: { color: '#9d55c9' },
            },
            {
              name: '<1',
              value: 0.9,
              parents: 'Solvent,Plastic',
              itemStyle: { color: '#9a6fbd' },
            },
          ],
        },
        {
          name: 'Sour',
          value: 2.8,
          itemStyle: { color: this.colors.solvent },
          children: [
            {
              name: '1',
              value: 1,
              parents: 'Solvent,Sour',
              itemStyle: { color: '#7030a0' },
            },
            {
              name: '<1',
              value: 0.9,
              parents: 'Solvent,Sour',
              itemStyle: { color: '#9d55c9' },
            },
            {
              name: '<1',
              value: 0.9,
              parents: 'Solvent,Sour',
              itemStyle: { color: '#9a6fbd' },
            },
          ],
        },
        {
          name: 'Chemical',
          value: 2.8,
          itemStyle: { color: this.colors.solvent },
          children: [
            {
              name: '1',
              value: 1,
              parents: 'Solvent,Chemical',
              itemStyle: { color: '#7030a0' },
            },
            {
              name: '<1',
              value: 0.9,
              parents: 'Solvent,Chemical',
              itemStyle: { color: '#9d55c9' },
            },
            {
              name: '<1',
              value: 0.9,
              parents: 'Solvent,Chemical',
              itemStyle: { color: '#9a6fbd' },
            },
          ],
        },
        {
          name: 'Solvent',
          value: 2.8,
          itemStyle: { color: this.colors.solvent },
          children: [
            {
              name: '1',
              value: 1,
              parents: 'Solvent,Solvent',
              itemStyle: { color: '#7030a0' },
            },
            {
              name: '<1',
              value: 0.9,
              parents: 'Solvent,Solvent',
              itemStyle: { color: '#9d55c9' },
            },
            {
              name: '<1',
              value: 0.9,
              parents: 'Solvent,Solvent',
              itemStyle: { color: '#9a6fbd' },
            },
          ],
        },
      ],
    },
    {
      name: 'Sulphur',
      itemStyle: { color: this.colors.sulphur },
      children: [
        {
          name: 'Sulphur',
          value: 3.75,
          itemStyle: { color: this.colors.sulphur },
          children: [
            {
              name: '1.5',
              value: 1.5,
              parents: 'Sulphur,Sulphur',
              itemStyle: { color: '#e6090b' },
            },
            {
              name: '1.25',
              value: 1.25,
              parents: 'Sulphur,Sulphur',
              itemStyle: { color: '#ff0000' },
            },
            {
              name: '1',
              value: 1,
              parents: 'Sulphur,Sulphur',
              itemStyle: { color: '#f28385' },
            },
          ],
        },
        {
          name: 'Rotten stink',
          value: 3.75,
          itemStyle: { color: this.colors.sulphur },
          children: [
            {
              name: '1.5',
              value: 1.5,
              parents: 'Sulphur,Rotten stink',
              itemStyle: { color: '#e6090b' },
            },
            {
              name: '1.25',
              value: 1.25,
              parents: 'Sulphur,Rotten stink',
              itemStyle: { color: '#ff0000' },
            },
            {
              name: '1',
              value: 1,
              parents: 'Sulphur,Rotten stink',
              itemStyle: { color: '#f28385' },
            },
          ],
        },
        {
          name: 'Damp',
          value: 3.75,
          itemStyle: { color: this.colors.sulphur },
          children: [
            {
              name: '1.5',
              value: 1.5,
              parents: 'Sulphur,Damp',
              itemStyle: { color: '#e6090b' },
            },
            {
              name: '1.25',
              value: 1.25,
              parents: 'Sulphur,Damp',
              itemStyle: { color: '#ff0000' },
            },
            {
              name: '1',
              value: 1,
              parents: 'Sulphur,Damp',
              itemStyle: { color: '#f28385' },
            },
          ],
        },
        {
          name: 'Stagnant',
          value: 3.75,
          itemStyle: { color: this.colors.sulphur },
          children: [
            {
              name: '1.5',
              value: 1.5,
              parents: 'Sulphur,Stagnant',
              itemStyle: { color: '#e6090b' },
            },
            {
              name: '1.25',
              value: 1.25,
              parents: 'Sulphur,Stagnant',
              itemStyle: { color: '#ff0000' },
            },
            {
              name: '1',
              value: 1,
              parents: 'Sulphur,Stagnant',
              itemStyle: { color: '#f28385' },
            },
          ],
        },
        {
          name: 'Stale sour',
          value: 3.75,
          itemStyle: { color: this.colors.sulphur },
          children: [
            {
              name: '1.5',
              value: 1.5,
              parents: 'Sulphur,Stale sour',
              itemStyle: { color: '#e6090b' },
            },
            {
              name: '1.25',
              value: 1.25,
              parents: 'Sulphur,Stale sour',
              itemStyle: { color: '#ff0000' },
            },
            {
              name: '1',
              value: 1,
              parents: 'Sulphur,Stale sour',
              itemStyle: { color: '#f28385' },
            },
          ],
        },
      ],
    },
    {
      name: 'Sweet',
      itemStyle: { color: this.colors.sweet },
      children: [
        {
          name: 'Sweet',
          value: 6,
          itemStyle: { color: this.colors.sweet },
          children: [
            {
              name: '1',
              value: 1,
              parents: 'Sweet,Sweet',
              itemStyle: { color: '#d42cb0' },
            },
            {
              name: '2',
              value: 2,
              parents: 'Sweet,Sweet',
              itemStyle: { color: '#ff00ff' },
            },
            {
              name: '3',
              value: 3,
              parents: 'Sweet,Sweet',
              itemStyle: { color: '#e995d7' },
            },
          ],
        },
      ],
    },
    {
      name: 'Etherish',
      itemStyle: { color: this.colors.etherish },
      children: [
        {
          name: 'Etherish',
          value: 3.75,
          itemStyle: { color: this.colors.etherish },
          children: [
            {
              name: '1',
              value: 1,
              parents: 'Etherish,Etherish',
              itemStyle: { color: '#203864' },
            },
            {
              name: '1.25',
              value: 1.25,
              parents: 'Etherish,Etherish',
              itemStyle: { color: '#2f5597' },
            },
            {
              name: '1.5',
              value: 1.5,
              parents: 'Etherish,Etherish',
              itemStyle: { color: '#8faadc' },
            },
          ],
        },
        {
          name: 'Medicinal',
          value: 3.75,
          itemStyle: { color: this.colors.etherish },
          children: [
            {
              name: '1',
              value: 1,
              parents: 'Etherish,Medicinal',
              itemStyle: { color: '#203864' },
            },
            {
              name: '1.25',
              value: 1.25,
              parents: 'Etherish,Medicinal',
              itemStyle: { color: '#2f5597' },
            },
            {
              name: '1.5',
              value: 1.5,
              parents: 'Etherish,Medicinal',
              itemStyle: { color: '#8faadc' },
            },
          ],
        },
      ],
    },
  ];

  wheelThreeData = [
    {
      name: 'Starchy',
      itemStyle: {
        color: this.colors.starchy,
      },
      children: [
        {
          name: 'Biscuit',
          value: 24.9,
          itemStyle: {
            color: this.colors.starchy,
          },
          children: [
            {
              name: '<8',
              value: 7.9,
              parents: 'Starchy,Biscuit',
              itemStyle: {
                color: '#843c0c',
              },
            },
            {
              name: '8',
              value: 8,
              parents: 'Starchy,Biscuit',
              itemStyle: {
                color: '#ed7d31',
              },
            },
            {
              name: '9',
              value: 9,
              parents: 'Starchy,Biscuit',
              itemStyle: {
                color: '#f7b77f',
              },
            },
          ],
        },
        {
          name: 'Cereal',
          value: 24.9,
          itemStyle: {
            color: this.colors.starchy,
          },
          children: [
            {
              name: '<8',
              value: 7.9,
              parents: 'Starchy,Cereal',
              itemStyle: {
                color: '#843c0c',
              },
            },
            {
              name: '8',
              value: 8,
              parents: 'Starchy,Cereal',
              itemStyle: {
                color: '#ed7d31',
              },
            },
            {
              name: '9',
              value: 9,
              parents: 'Starchy,Cereal',
              itemStyle: {
                color: '#f7b77f',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'Fruity',
      itemStyle: { color: this.colors.fruity },
      children: [
        {
          name: 'Acetaldehyde',
          value: 24.9,
          itemStyle: { color: this.colors.fruity },
          children: [
            {
              name: '<8',
              value: 7.9,
              parents: 'Fruity,Acetaldehyde',
              itemStyle: { color: '#90a083' },
            },
            {
              name: '8',
              value: 8,
              parents: 'Fruity,Acetaldehyde',
              itemStyle: { color: '#048f3a' },
            },
            {
              name: '9',
              value: 9,
              parents: 'Fruity,Acetaldehyde',
              itemStyle: { color: '#50cf87' },
            },
          ],
        },
        {
          name: 'Fruity',
          value: 24.9,
          itemStyle: { color: this.colors.fruity },
          children: [
            {
              name: '<8',
              value: 7.9,
              parents: 'Fruity,Fruity',
              itemStyle: { color: '#90a083' },
            },
            {
              name: '8',
              value: 8,
              parents: 'Fruity,Fruity',
              itemStyle: { color: '#048f3a' },
            },
            {
              name: '9',
              value: 9,
              parents: 'Fruity,Fruity',
              itemStyle: { color: '#50cf87' },
            },
          ],
        },
        {
          name: 'Estery',
          value: 24.9,
          itemStyle: { color: this.colors.fruity },
          children: [
            {
              name: '<8',
              value: 7.9,
              parents: 'Fruity,Estery',
              itemStyle: { color: '#90a083' },
            },
            {
              name: '8',
              value: 8,
              parents: 'Fruity,Estery',
              itemStyle: { color: '#048f3a' },
            },
            {
              name: '9',
              value: 9,
              parents: 'Fruity,Estery',
              itemStyle: { color: '#50cf87' },
            },
          ],
        },
        {
          name: 'Fusel like',
          value: 24.9,
          itemStyle: { color: this.colors.fruity },
          children: [
            {
              name: '<8',
              value: 7.9,
              parents: 'Fruity,Fusel like',
              itemStyle: { color: '#90a083' },
            },
            {
              name: '8',
              value: 8,
              parents: 'Fruity,Fusel like',
              itemStyle: { color: '#048f3a' },
            },
            {
              name: '9',
              value: 9,
              parents: 'Fruity,Fusel like',
              itemStyle: { color: '#50cf87' },
            },
          ],
        },
      ],
    },
    {
      name: 'Peppery',
      itemStyle: { color: this.colors.carrots },
      children: [
        {
          name: 'Peppery',
          value: 27,
          itemStyle: { color: this.colors.carrots },
          children: [
            {
              name: '10',
              value: 10,
              parents: 'Peppery,Peppery',
              itemStyle: { color: '#ffc000' },
            },
            {
              name: '9',
              value: 9,
              parents: 'Peppery,Peppery',
              itemStyle: { color: '#f4d716' },
            },
            {
              name: '8',
              value: 8,
              parents: 'Peppery,Peppery',
              itemStyle: { color: '#f9eb8a' },
            },
          ],
        },
        {
          name: 'Musty',
          value: 27,
          itemStyle: { color: this.colors.carrots },
          children: [
            {
              name: '10',
              value: 10,
              parents: 'Peppery,Musty',
              itemStyle: { color: '#ffc000' },
            },
            {
              name: '9',
              value: 9,
              parents: 'Peppery,Musty',
              itemStyle: { color: '#f4d716' },
            },
            {
              name: '8',
              value: 8,
              parents: 'Peppery,Musty',
              itemStyle: { color: '#f9eb8a' },
            },
          ],
        },
        {
          name: 'Earthy',
          value: 27,
          itemStyle: { color: this.colors.carrots },
          children: [
            {
              name: '10',
              value: 10,
              parents: 'Peppery,Earthy',
              itemStyle: { color: '#ffc000' },
            },
            {
              name: '9',
              value: 9,
              parents: 'Peppery,Earthy',
              itemStyle: { color: '#f4d716' },
            },
            {
              name: '8',
              value: 8,
              parents: 'Peppery,Earthy',
              itemStyle: { color: '#f9eb8a' },
            },
          ],
        },
      ],
    },
    {
      name: 'Multivitamin',
      itemStyle: { color: this.colors.solvent },
      children: [
        {
          name: 'Vitamin B',
          value: 23.8,
          itemStyle: { color: this.colors.solvent },
          children: [
            {
              name: '<8',
              value: 7.9,
              parents: 'Multivitamin,Vitamin B',
              itemStyle: { color: '#7030a0' },
            },
            {
              name: '<8',
              value: 7.9,
              parents: 'Multivitamin,Vitamin B',
              itemStyle: { color: '#9d55c9' },
            },
            {
              name: '8',
              value: 8,
              parents: 'Multivitamin,Vitamin B',
              itemStyle: { color: '#9a6fbd' },
            },
          ],
        },
        {
          name: 'Meaty',
          value: 23.8,
          itemStyle: { color: this.colors.solvent },
          children: [
            {
              name: '<8',
              value: 7.9,
              parents: 'Multivitamin,Meaty',
              itemStyle: { color: '#7030a0' },
            },
            {
              name: '<8',
              value: 7.9,
              parents: 'Multivitamin,Meaty',
              itemStyle: { color: '#9d55c9' },
            },
            {
              name: '8',
              value: 8,
              parents: 'Multivitamin,Meaty',
              itemStyle: { color: '#9a6fbd' },
            },
          ],
        },
        {
          name: 'Multivitamin',
          value: 23.8,
          itemStyle: { color: this.colors.solvent },
          children: [
            {
              name: '<8',
              value: 7.9,
              parents: 'Multivitamin,Multivitamin',
              itemStyle: { color: '#7030a0' },
            },
            {
              name: '<8',
              value: 7.9,
              parents: 'Multivitamin,Multivitamin',
              itemStyle: { color: '#9d55c9' },
            },
            {
              name: '8',
              value: 8,
              parents: 'Multivitamin,Multivitamin',
              itemStyle: { color: '#9a6fbd' },
            },
          ],
        },
      ],
    },
    {
      name: 'Sulphur',
      itemStyle: { color: this.colors.sulphur },
      children: [
        {
          name: 'Sulphur',
          value: 24.9,
          itemStyle: { color: this.colors.sulphur },
          children: [
            {
              name: '<8',
              value: 7.9,
              parents: 'Sulphur,Sulphur',
              itemStyle: { color: '#e6090b' },
            },
            {
              name: '8',
              value: 8,
              parents: 'Sulphur,Sulphur',
              itemStyle: { color: '#ff0000' },
            },
            {
              name: '9',
              value: 9,
              parents: 'Sulphur,Sulphur',
              itemStyle: { color: '#f28385' },
            },
          ],
        },
        {
          name: 'Rotten stink',
          value: 24.9,
          itemStyle: { color: this.colors.sulphur },
          children: [
            {
              name: '<8',
              value: 7.9,
              parents: 'Sulphur,Rotten stink',
              itemStyle: { color: '#e6090b' },
            },
            {
              name: '8',
              value: 8,
              parents: 'Sulphur,Rotten stink',
              itemStyle: { color: '#ff0000' },
            },
            {
              name: '9',
              value: 9,
              parents: 'Sulphur,Rotten stink',
              itemStyle: { color: '#f28385' },
            },
          ],
        },
        {
          name: 'Damp',
          value: 24.9,
          itemStyle: { color: this.colors.sulphur },
          children: [
            {
              name: '<8',
              value: 7.9,
              parents: 'Sulphur,Damp',
              itemStyle: { color: '#e6090b' },
            },
            {
              name: '8',
              value: 8,
              parents: 'Sulphur,Damp',
              itemStyle: { color: '#ff0000' },
            },
            {
              name: '9',
              value: 9,
              parents: 'Sulphur,Damp',
              itemStyle: { color: '#f28385' },
            },
          ],
        },
        {
          name: 'Stagnant',
          value: 24.9,
          itemStyle: { color: this.colors.sulphur },
          children: [
            {
              name: '<8',
              value: 7.9,
              parents: 'Sulphur,Stagnant',
              itemStyle: { color: '#e6090b' },
            },
            {
              name: '8',
              value: 8,
              parents: 'Sulphur,Stagnant',
              itemStyle: { color: '#ff0000' },
            },
            {
              name: '9',
              value: 9,
              parents: 'Sulphur,Stagnant',
              itemStyle: { color: '#f28385' },
            },
          ],
        },
        {
          name: 'Stale sour',
          value: 24.9,
          itemStyle: { color: this.colors.sulphur },
          children: [
            {
              name: '<8',
              value: 7.9,
              parents: 'Sulphur,Stale sour',
              itemStyle: { color: '#e6090b' },
            },
            {
              name: '8',
              value: 8,
              parents: 'Sulphur,Stale sour',
              itemStyle: { color: '#ff0000' },
            },
            {
              name: '9',
              value: 9,
              parents: 'Sulphur,Stale sour',
              itemStyle: { color: '#f28385' },
            },
          ],
        },
      ],
    },
    {
      name: 'Sweet',
      itemStyle: { color: this.colors.sweet },
      children: [
        {
          name: 'Honey',
          value: 27,
          itemStyle: { color: this.colors.sweet },
          children: [
            {
              name: '8',
              value: 8,
              parents: 'Sweet,Honey',
              itemStyle: { color: '#d42cb0' },
            },
            {
              name: '9',
              value: 9,
              parents: 'Sweet,Honey',
              itemStyle: { color: '#ff00ff' },
            },
            {
              name: '10',
              value: 10,
              parents: 'Sweet,Honey',
              itemStyle: { color: '#e995d7' },
            },
          ],
        },
        {
          name: 'Sweet',
          value: 27,
          itemStyle: { color: this.colors.sweet },
          children: [
            {
              name: '8',
              value: 8,
              parents: 'Sweet,Sweet',
              itemStyle: { color: '#d42cb0' },
            },
            {
              name: '9',
              value: 9,
              parents: 'Sweet,Sweet',
              itemStyle: { color: '#ff00ff' },
            },
            {
              name: '10',
              value: 10,
              parents: 'Sweet,Sweet',
              itemStyle: { color: '#e995d7' },
            },
          ],
        },
        {
          name: 'Diacetyl',
          value: 27,
          itemStyle: { color: this.colors.sweet },
          children: [
            {
              name: '8',
              value: 8,
              parents: 'Sweet,Diacetyl',
              itemStyle: { color: '#d42cb0' },
            },
            {
              name: '9',
              value: 9,
              parents: 'Sweet,Diacetyl',
              itemStyle: { color: '#ff00ff' },
            },
            {
              name: '10',
              value: 10,
              parents: 'Sweet,Diacetyl',
              itemStyle: { color: '#e995d7' },
            },
          ],
        },
      ],
    },
    {
      name: 'Etherish',
      itemStyle: { color: this.colors.etherish },
      children: [
        {
          name: 'Etherish',
          value: 24.9,
          itemStyle: { color: this.colors.etherish },
          children: [
            {
              name: '<8',
              value: 7.9,
              parents: 'Etherish,Etherish',
              itemStyle: { color: '#203864' },
            },
            {
              name: '8',
              value: 8,
              parents: 'Etherish,Etherish',
              itemStyle: { color: '#2f5597' },
            },
            {
              name: '9',
              value: 9,
              parents: 'Etherish,Etherish',
              itemStyle: { color: '#8faadc' },
            },
          ],
        },
        {
          name: 'Medicinal',
          value: 24.9,
          itemStyle: { color: this.colors.etherish },
          children: [
            {
              name: '<8',
              value: 7.9,
              parents: 'Etherish,Medicinal',
              itemStyle: { color: '#203864' },
            },
            {
              name: '8',
              value: 8,
              parents: 'Etherish,Medicinal',
              itemStyle: { color: '#2f5597' },
            },
            {
              name: '9',
              value: 9,
              parents: 'Etherish,Medicinal',
              itemStyle: { color: '#8faadc' },
            },
          ],
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.initChart();
  }

  initChart() {
    const chartDom = this.chartContainer.nativeElement;
    const myChart = echarts.init(chartDom);

    const option = {
      series: {
        type: 'sunburst',
        data: this.wheelThreeData,
        radius: ['30%', '95%'],
        label: {
          rotate: 'radial',
        },
      },
    };

    myChart.setOption(option);

    myChart.on('click', (params: any) => {
      if (params && params.data && params.data.parents) {
        console.log('Clicked on:', params.data);
      }
    });
  }
}
