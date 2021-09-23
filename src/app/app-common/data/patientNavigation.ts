import { SideNavigationItem, SideNavigationItems, HeaderItem, SideNavigationSection } from "../models";
 
export const patientSideNavigationItem: SideNavigationItem[] = [
    {
        icon: 'pi pi-fw pi-th-large',
        label: 'Patient Details',
        routerLink: '/patient',
    },
    
    {
        icon:'pi pi-fw pi-info-circle',
        label: 'Patient Visit Details',
        routerLink: '/patient/patient-visit',
    },
    {
        icon:'pi pi-fw pi-info-circle',
        label: 'Schedule Meeting',
        routerLink: '/user/schedule',
    }
]