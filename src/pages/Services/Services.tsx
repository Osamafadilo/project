import React from 'react';
import { useTranslation } from 'react-i18next';
import { Search, Home as HomeIcon, Truck, Store, Wrench, Building } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import './Services.css';

const Services = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const serviceCategories = [
    { 
      icon: HomeIcon, 
      name: t('accommodation'), 
      description: 'Find comfortable accommodations for your needs', 
      color: 'bg-blue-500',
      path: '/accommodations'
    },
    { 
      icon: Truck, 
      name: t('transport'), 
      description: 'Reliable transportation services', 
      color: 'bg-green-500',
      path: '/transport'
    },
    { 
      icon: Store, 
      name: t('shopping'), 
      description: 'Connect with local and online stores', 
      color: 'bg-purple-500',
      path: '/shopping'
    },
    { 
      icon: Wrench, 
      name: t('maintenance'), 
      description: 'Professional maintenance services', 
      color: 'bg-orange-500',
      path: '/maintenance'
    },
    { 
      icon: Building, 
      name: t('investment'), 
      description: 'Discover investment opportunities', 
      color: 'bg-red-500',
      path: '/investment'
    },
  ];

  const handleServiceClick = (path: string) => {
    navigate(path);
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">{t('ourServices')}</h1>
            <div className="max-w-xl">
              <div className="relative flex items-center">
                <input
                  type="text"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 pl-4 sm:text-sm border-gray-300 rounded-lg h-12"
                  placeholder={t('searchPlaceholder')}
                />
                <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                  <button className="inline-flex items-center border border-transparent rounded-md px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                    <Search className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => handleServiceClick(category.path)}
              >
                <div className={`h-2 ${category.color}`} />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <category.icon className="h-8 w-8 text-gray-900" />
                    <h3 className="text-xl font-semibold text-gray-900 mr-3">{category.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <button 
                    className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    {t('exploreServices')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Services;