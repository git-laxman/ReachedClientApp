export class Expenditure {
    ExpendiureID: any;
    ExpenditureName: string;
    SubCategories: string;
}

export class NewPayment {
    NewPaymentID: any;
    CategoryName: string;
    PaymentType: any;
    TotalPayment: boolean;
    AdvancePayment: boolean;
    NewPaymentDate: Date;
    NewPaymentAmount: number;
    NewPaymentQuantity: number;
    NewPaymentComments: string;
    NewPaymentPaidBy: string;
    AdvanceDate: Date;
    AdvanceAmount: number;
    AdvanceQuantity: number;
    AdvanceComments: string;
    AdvancePaidBy: string;
}

export class BalancePayment {
    BalancePaymentID: any;
    CategoryName: string;
    PaymentType: any;
    TotalPayment: boolean;
    AdvancePayment: boolean;
    BalancePaymentDate: Date;
    BalancePaymentAmount: number;
    BalancePaymentQuantity: number;
    BalancePaymentComments: string;
    BalancePaymentPaidBy: string;
    AdvanceDate: Date;
    AdvanceAmount: number;
    AdvanceQuantity: number;
    AdvanceComments: string;
    AdvancePaidBy: string;
}


