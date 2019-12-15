import {
    DynamicCheckboxModel,
    DynamicDatePickerModel,
    DynamicFormGroupModel,
    DynamicInputModel,
    DynamicRadioGroupModel,
    DynamicSelectModel,
    DynamicSwitchModel,
    DynamicTextAreaModel,
    MATCH_DISABLED,
    MATCH_REQUIRED
} from "@ng-dynamic-forms/core";
import { BehaviorSubject } from "rxjs";

export const STATES_AUTOCOMPLETE_LIST = [
   "اصفهان","فارس","تهران","گیلان"
];

export const MATERIAL_SAMPLE_FORM_MODEL = [

    new DynamicFormGroupModel({

        id: "stay",
        group: [
            new DynamicDatePickerModel({

                id: "arrivalDate",
                inline: false,
                placeholder: "تاریخ ورود"
            }),

            new DynamicDatePickerModel({
                id: "departureDate",
                inline: false,
                placeholder: "تاریخ خروج"
            })
        ],
        validators: {
            customDateRangeValidator: null
        },
        errorMessages: {
            customDateRangeValidator: "تاریخ خروج باید بعد از تاریخ ورود باشد"
        }
    }),

    new DynamicFormGroupModel({

        id: "room",
        group: [
            new DynamicSelectModel<string>({

                id: "roomSize",
                placeholder: "نوع اتاق",
                hint: "نوع اتاق را انتخاب کنید",
                options: [
                    {
                        label: "یک تخته",
                        value: "single-room"
                    },
                    {
                        label: "یک تخته دابل",
                        value: "double-room"
                    },
                    {
                        label: "اتاق ویژه",
                        value: "business-suite"
                    },
                    {
                        label: "سوئیت رویال",
                        value: "presidential-suite"
                    }
                ]
            }),

            new DynamicInputModel({

                id: "roomQuantity",
                inputType: "number",
                placeholder: "تعداد اتاق",
                hint: "Maximum: 5",
                max: 5,
                min: 0
            })
        ]
    }),

    new DynamicInputModel({

        id: "firstName",
        maxLength: 25,
        placeholder: "نام",
        validators: {
            required: null
        },
        errorMessages: {
            required: "اجباری"
        }
    }),

    new DynamicInputModel({

        id: "lastName",
        maxLength: 50,
        placeholder: "نام خانوادگی",
        validators: {
            required: null
        },
        errorMessages: {
            required: "اجباری"
        },
        additional: {
            color: "accent"
        }
    }),

    new DynamicInputModel({

        id: "email",
        placeholder: "ایمیل",
        validators: {
            email: null
        },
        errorMessages: {
            email: "فرمت ایمیل صحیح وارد کنید"
        }
    }),

    new DynamicInputModel({

        id: "phone",
        inputType: "tel",
        placeholder: "شماره تلفن",
        hint: "با کد کشور وارد کنید",
        prefix: "+",
        validators: {
            required: null
        },
        errorMessages: {
            required: "اجباری"
        }
    }),

    new DynamicFormGroupModel({

        id: "addressStreet",
        group: [

            new DynamicInputModel({
                id: "streetName",
                placeholder: "نام خیابان"
            }),

            new DynamicInputModel({
                id: "streetNumber",
                placeholder: "شماره خیابان"
            })
        ]
    }),

    new DynamicFormGroupModel({

        id: "addressLocation",
        group: [
            new DynamicInputModel({

                id: "zipCode",
                placeholder: "کد پستی"
            }),

            new DynamicInputModel({

                id: "state",
                hint: "Autocomplete",
                placeholder: "استان",
                list: new BehaviorSubject(STATES_AUTOCOMPLETE_LIST)
            }),

            new DynamicInputModel({

                id: "city",
                placeholder: "شهر"
            })
        ]
    }),

    new DynamicSelectModel<string>({

        id: "extras",
        placeholder: "سرویس ها",
        multiple: true,
        options: [
            {
                label: "صبحانه",
                value: "extraBreakfast"
            },
            {
                label: "تلویزیون",
                value: "extraTV"
            },
            {
                label: "WiFi",
                value: "extraWiFi"
            },
            {
                label: "پارکینگ",
                value: "extraParking"
            },
            {
                label: "بالکن",
                value: "extraBalcony"
            }
        ]
    }),

    new DynamicRadioGroupModel<string>({

        id: "payment",
        options: [
            {
                label: "Credit Card",
                value: "cc"
            },
            {
                label: "PayPal",
                value: "paypal"
            },
            {
                label: "Cash",
                value: "cash"
            },
            {
                label: "Bitcoin",
                value: "bitcoin"
            }
        ],
        value: "cc"
    }),

    new DynamicTextAreaModel({

        id: "note",
        rows: 3,
        placeholder: "Personal Note",
        relations: [
            {
                match: MATCH_DISABLED,
                when: [{id: "payment", value: "bitcoin"}]
            },
            {
                match: MATCH_REQUIRED,
                when: [{id: "payment", value: "paypal"}]
            }
        ]
    }),

    new DynamicInputModel({

        id: "tags",
        placeholder: "Tags",
        multiple: true,
        value: ["hotel", "booking"]
    }),

    new DynamicSwitchModel({

        id: "reminder",
        offLabel: "Send me a reminder",
        onLabel: "Send me a reminder",
        value: false

    }),

    new DynamicSwitchModel({

        id: "newsletter",
        offLabel: "Subscribe to newsletter",
        onLabel: "Subscribe to newsletter",
        value: true
    }),

    new DynamicCheckboxModel({

        id: "confirm",
        label: "I confirm the information given above"
    })
];
