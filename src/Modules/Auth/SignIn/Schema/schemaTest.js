/* eslint-disable */
import { v4 as uuid } from 'uuid';
import { Typography } from '@material-ui/core';
import FieldsEnum from '../../../../Core/FormCreator/Utils/FieldsEnum';
export default [
        {
            id: uuid(),
            label: {
                ar: 'اسم المركز',
                en: 'Company Name'
            },
            name: 'companyName',
            type: FieldsEnum.TEXT_FIELD,
            gridSize: 12,
            sectionName: 'CenterDetails',
            validators: [],
        },
        {
            id: uuid(),
            label: {
                ar: 'رقم الترخيص المؤقت',
                en: 'Temporary License Number'
            },
            name: 'temporaryLicenceNum',
            type: FieldsEnum.TEXT_FIELD,
            gridSize: 12,
            sectionName: 'CenterDetails',
            validators: [],
        },
        {
            id: uuid(),
            label: {
                ar: 'رقم السجل التجاري',
                en: 'Commercial Registration No'
            },
            name: 'CRNumber',
            type: FieldsEnum.SELECT_FIELD,
            gridSize: 12,
            sectionName: 'CenterDetails',
            optionsLookup:{isFromLookup:true,lookUpName:"staffTypes"},
            options: [
                { value: '01', label: { ar: 'ذوي الإعاقة' } },
                { value: '02', label: { ar: ' 2 ذوي الإعاقة' } },
            ],
            validators: [],
        },
        {
            id: uuid(),
            label: {
                ar: (
                    <>
                        <Typography gutterBottom variant="h5" component="span">
                            انا اقر واتعهد بالالتزام بالشروط والاحكام الواردة والمتعلقه بالطلب
                        </Typography>

                    </>
                ),
                en: 'I agree'
            },
            name: 'agree',
            type: FieldsEnum.CHECKBOX_FIELD,
            value: 'agree',
            gridSize: 12,
            sectionName: 'CenterDetails',
            validators: [],
        },
        {
            id: uuid(),
            label: {
                ar: 'رقم رخصة البلدية',
                en: 'Municipal License'
            },
            name: 'municipLicenseNo',
            type: FieldsEnum.TEXT_FIELD,
            gridSize: 12,
            sectionName: 'CenterDetails',
            options: [],
            validators: [],
        },

        {
            id: uuid(),
            label: {
                ar: 'عدد المستفيدين الفعلي',
                en: 'Beneficiaries Number'
            },
            name: 'beneficiariesNum',
            type: FieldsEnum.TEXT_FIELD,
            gridSize: 12,
            sectionName: 'Capacity',
            options: [],
            validators: [],
        },
        {
            id: uuid(),
            label: {
                ar: 'مساحة مسطح البناء',
                en: 'Construction Flat Area '
            },
            name: 'buildingArea',
            type: FieldsEnum.TEXT_FIELD,
            gridSize: 12,
            sectionName: 'Capacity',
            options: [],
            validators: [],
        },
        {
            id: uuid(),
            label: {
                ar: 'مساحة القبو',
                en: 'Basement Space'
            },
            name: 'basementArea',
            type: FieldsEnum.TEXT_FIELD,
            gridSize: 12,
            sectionName: 'Capacity',
            options: [],
            validators: [],
        },
        {
            id: uuid(),
            label: {
                ar: 'الضمان المالي',
                en: 'Financial Guarantee'
            },
            name: 'financialGuarantee',
            type: FieldsEnum.TEXT_FIELD,
            gridSize: 12,
            sectionName: 'Capacity',
            options: [],
            validators: [],
        },
        {
            id: uuid(),
            label: {
                ar: 'الطاقة الاستعابية',
                en: 'capacity'
            },
            name: 'capacity',
            type: FieldsEnum.TEXT_FIELD,
            gridSize: 12,
            sectionName: 'Capacity',
            options: [],
            validators: [],
        },

        {
            id: uuid(),
            label: {
                ar: 'تقديم خدمات صحية',
                en: 'Providing Health Services'
            },
            name: 'healthServices',
            type: FieldsEnum.RADIO_INPUT,
            gridSize: 12,
            sectionName: 'HealthServices',
            options: [
                { value: 'yes', label: { ar: 'نعم', en: 'Yes' } },
                { value: 'no', label: { ar: 'لا', en: 'No' } },
            ],
            validators: [{
                id: 'workingHours-required',
                alert: 'هذا الحقل مطلوب'
            }],
        },

        {
            id: uuid(),
            label: {
                ar: 'نوع الخدمة الصحية',
                en: 'Type of health service'
            },
            name: 'healthServiceType',
            type: FieldsEnum.SELECT_FIELD,
            gridSize: 12,
            sectionName: 'HealthServices',
            options: [
                { value: 1, label: { ar: 'رخصة وزارة الصحة', en: 'MOH License' } },
                { value: 2, label: { ar: 'عقد شراكة مع منشأة رعاية صحية', en: 'Partnership contract with a Health Care Facility' } },
            ],
            validators: [],
        },


       /*  {
            id: uuid(),
            label: {
                ar: 'ارفاق الخطة التشغيلية',
                en: 'Operational Plan'
            },
            name: 'OperationalPlan',
            type: 'file',
            gridSize: 12,
            sectionName: 'Requirements',
            options: [],
            validators: [],
        },

        {
            id: uuid(),
            label: {
                ar: 'ارفاق الخطة التنفيذية',
                en: 'Executive Plan'
            },
            name: 'ExecutivePlan',
            type: 'file',
            gridSize: 12,
            sectionName: 'Requirements',
            options: [],
            validators: [],
        },

        {
            id: uuid(),
            label: {
                ar: "ارفاق تقرير زيارة مكتب هندسي معتمد",
                en: 'Office Report'
            },
            name: 'OfficeReport',
            type: 'file',
            gridSize: 12,
            sectionName: 'Requirements',
            options: [],
            validators: [],
        },


        {
            id: uuid(),
            label: {
                ar: "ارفاق تقرير المسح الأمني",
                en: 'Security Report'
            },
            name: 'SecurityReport',
            type: 'file',
            gridSize: 12,
            sectionName: 'Requirements',
            options: [],
            validators: [],
        },


        {
            id: uuid(),
            label: {
                ar: "ارفاق صور الأثاث و الأجهزة الكهربائية",
                en: 'Furniture'
            },
            name: 'Furniture',
            type: 'file',
            gridSize: 12,
            sectionName: 'Requirements',
            options: [],
            validators: [],
        },

        {
            id: uuid(),
            label: {
                ar: "ارفاق الضمان المالي",
                en: 'Financial Guarantee'
            },
            name: 'FinancialGuaranteeAtt',
            type: 'file',
            gridSize: 12,
            sectionName: 'Requirements',
            options: [],
            validators: [],
        },
 */



    ];
