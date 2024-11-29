export type AuthUser = User & { roles: ValidRoleId[] };

export interface AdditionalData {
	id: number;
	packingSlipId: number;
	manufacturingDate: string; // date
	storageLocation: string;
	consumptionPoint: string;
	consignation: string;
	usageCode: string;
	dutiableGoods: string;
	batchNumber: string;
	shippingDate: string; // date
	changeCode: string;
	partNumberSupplier: string;
	quantity2: number;
	unitOfMeasure: string;
	countryOfOrigin: string;
	packingSlipText: string;
	status: string;
	updatedAt: string; // date
	updatedBy: string;
	createdAt: string; // date
	createdBy: string;
	binCode: string;
}

export interface AdditionalPackaging {
	id: number;
	packingPositionId: number;
	customerPackUnit: string;
	supplierPackUnit: string;
	qtyOfPackUnits: string;
	createdAt: string; // date
	createdBy: string;
	updatedAt: string; // date
	updatedBy: string;
}

export interface AsnView {
	shipmentId: number;
	status: number;
	clientNumber: string;
	supplierNumber: string;
	plantName: string;
	shipmentNumber: string;
	createdAt: string; // date
	updatedAt: string; // date
	dataOrigin: string;
	firstPackingSlipId: number;
}

export interface Client {
	id: number;
	number: string;
	land: string;
	name: string;
	createdAt: string; // date
	createdBy: string;
	updatedAt: string; // date
	updatedBy: str;
	city: string;
	zipCode: string;
	status: string;
	streetHouseNumber: string;
	packageNumberPrefix: string;
	adminClientId: string;
	oftpTargetSystem: string;
}

export interface CountPojo {
	count: number;
}

export interface DeliveryInstruction {
	id: number;
	customerDescription: string;
	customerStreetHouseNumber: string;
	customerLand: string;
	customerZipCode: string;
	customerCity: string;
	customerContactPersonName: string;
	customerPurchasingGroup: string;
	customerIdentification: string;
	customerPhone: string;
	customerFax: string;
	customerEmail: string;
	customerVat: string;
	customerNumber: string;
	supplierNumber: string;
	clientNumber: string;
	plantNumber: string;
	plantDescription: string;
	unloadingPoint: string;
	storagePoint: string;
	consumptionPoint: string;
	currentLabNumber: string;
	currentLabDate: string; // date
	lastLabNumber: string;
	lastLabDate: string; // date
	partNumber: string;
	materialDescription: string;
	productionReleaseDate: string;
	materialReleaseDate: string;
	orderNumber: string;
	freeText: string;
	unitOfMeasure: string;
	inputProgressCount: string;
	startDateEfz: string;
	resetEfz: string;
	status: string;
	readAt: string; // date
	inProgressFrom: string; // date
	closedAt: string; // date
	ediMessageKey: string;
	overtakeNumber: string;
	overtakeDate: string; // date
	updatedAt: string; // date
	updatedBy: string;
	createdAt: string; // date
	createdBy: string;
	deletionMark: string;
	labId: string;
	labFlag: string;
	key: string;
	orderPosition: string;
}

export interface DeliveryInstructionDifferentiationData {
	id: number;
	labId: number;
	status: string;
	goodsReceiverQty: string;
	goodsReceiverPackingSlipNo: string;
	goodsReceiverDate: string;
	updatedAt: string; // date
	updatedBy: string;
	createdAt: string; // date
	createdBy: string;
}

export interface DeliveryInstructionMessages {
	id: number;
	blobId: number;
	supplierNumber: string;
	clientNumber: string;
	name: string;
	key: string;
	updatedAt: string; // date
	updatedBy: string;
	createdAt: string; // date
	createdBy: string;
}

export interface DeliveryInstructionPackaging {
	id: number;
	labId: number;
	packagingName: string;
	fillingQuantityOfPackage: string;
	updatedAt: string; // date
	updatedBy: string;
	createdAt: string; // date
	createdBy: string;
}

export interface DeliveryInstructionPurchaseOrderView {
	labPOId: number;
	supplierNumber: string;
	clientNumber: string;
	updatedAt: string; // date
	updatedBy: string;
	createdAt: string; // date
	createdBy: string;
	status: string;
	dataOrigin: string;
	partNumber: string;
	orderNumber: string;
	orderPosition: string;
	plantName: string;
	unloadingPoint: string;
	date: string;
	upperCasePlantName: string;
}

export interface DeliveryInstructionsScheduledQuantities {
	id: number;
	labId: number;
	status: string;
	deliveryDate: string;
	deliveryQuantity: string;
	cumulatedQuantity: string;
	difference: string;
	positionNumber: string;
	updatedAt: string; // date
	updatedBy: string;
	createdAt: string; // date
	createdBy: string;
}

export interface LabCurrentPartNumberView {
	id: number;
	customerDescription: string;
	customerStreetHouseNumber: string;
	customerLand: string;
	customerZipCode: string;
	customerCity: string;
	customerContactPersonName: string;
	customerPurchasingGroup: string;
	customerIdentification: string;
	customerPhone: string;
	customerFax: string;
	customerEmail: string;
	customerVat: string;
	customerNumber: string;
	supplierNumber: string;
	clientNumber: string;
	plantNumber: string;
	plantDescription: string;
	unloadingPoint: string;
	storagePoint: string;
	consumptionPoint: string;
	currentLabNumber: string;
	currentLabDate: string; // date
	lastLabNumber: string;
	lastLabDate: string; // date
	partNumber: string;
	materialDescription: string;
	productionReleaseDate: string;
	materialReleaseDate: string;
	orderNumber: string;
	freeText: string;
	unitOfMeasures: string;
	inputProgressCount: string;
	startDateEfz: string;
	resetEfz: string;
	status: string;
	readAt: string; // date
	inProgressFrom: string; // date
	closedAt: string; // date
	ediMessageKey: string;
	overtakeNumber: string;
	overtakeDate: string; // date
	updatedAt: string; // date
	updatedBy: string;
	createdAt: string; // date
	createdBy: string;
	deletionMark: string;
	labId: string;
	labFlag: string;
	key: string;
}

export interface LogInfo {
	id: number;
	clientNumber: string;
	supplierNumber: string;
	logInfoType: number;
	createdAt: string; // date
	createdBy: string;
	info1: string;
	info2: string;
	info3: string;
	info4: string;
	info5: string;
	status: number;
	serverName: string;
	updatedAt: string; // date
	updatedBy: string;
}

export interface LogInfoType {
	id: number;
	module: string;
	rubric: string;
	info1: string;
	info2: string;
	info3: string;
	info4: string;
	info5: string;
	createdAt: string; // date
	createdBy: string;
	active: number;
	keepBeforeDeletion: number;
	description: string;
}

export interface NewSupplierRequestPojo {
	clientId: number;
	number: string;
	name: string;
	streetHouseNumber: string;
	zipCode: string;
	city: string;
	land: string;
	phone: string;
	fax: string;
	email: string;
}

export interface NewUserRequestPojo {
	name: string;
	loginName: string;
	phone: string;
	fax: string;
	mobileNumber: string;
	email: string;
	clientNumber: string;
	password: string;
}

export interface PackUnitNumbers {
	id: number;
	packingPositionId: number;
	packUnitNumber: string;
	masterPackUnitId: number;
	status: string;
	updatedAt: string; // date
	updatedBy: string;
	createdAt: string; // date
	createdBy: string;
}

export interface PackingPositions {
	id: number;
	additionalDataId: number;
	shipmentId: number;
	packingPosition: string;
	customerPackUnit: string;
	supplierPackUnit: string;
	qtyPerPackUnit: number;
	qtyOfPackUnits: string;
	serialLabelNoFrom: string;
	serialLabelNoTo: string;
	lk: string;
	vk: string;
	ek: string;
	hazardousGoods: string;
	unitOfMeasure: string;
	packUnitsQty: string;
	grossWeight: number;
	netWeight: number;
	status: string;
	updatedAt: string; // date
	updatedBy: string;
	createdAt: string; // date
	createdBy: string;
}

export interface PackingSlip {
	id: number;
	labId: number;
	shipmentId: number;
	packingSlipNumber: string;
	packingSlipDate: string;
	customerPurchasingGroup: string;
	customerEmail: string;
	packingSlipPosition: string;
	partNumber: string;
	deliveryQuantity: number;
	unitOfMeasure: string;
	orderNumber: string;
	orderPosition: string;
	unloadingPoint: string;
	status: string;
	updatedAt: string; // date
	updatedBy: string;
	createdAt: string; // date
	createdBy: string;
	dataOrigin: string;
}

export interface PackingSlipFreeInput {
	id: number;
	customerDescription: string;
	customerStreetHouseNumber: string;
	customerLand: string;
	customerZipCode: string;
	customerCity: string;
	clientNumber: string;
	supplierNumber: string;
	customerNumber: string;
	unloadingPoint: string;
	partNumber: string;
	materialDescription: string;
	unitOfMeasure: string;
	orderNumber: string;
	orderPosition: string;
	status: string;
	updatedAt: string; // date
	updatedBy: string;
	createdAt: string; // date
	createdBy: string;
	plantNumber: string;
	plantDescription: string;
}

export interface PackingSlipNumbers {
	id: number;
	supplierNumber: string;
	number: string;
	clientNumber: string;
	status: string;
	updatedAt: string; // date
	updatedBy: string;
	createdAt: string; // date
	createdBy: string;
}

interface RoleBase {
	id: number;
	name: string;
	description: string;
}

export interface ASN_USER_Role extends RoleBase {
	id: 3333;
	name: "ASN_USER";
	description: "Access to ASN module";
}

export interface DI_USER_Role extends RoleBase {
	id: 4444;
	name: "DI_USER";
	description: "Access to delivery instruction's module";
}

export interface SUPPLIER_ADMIN_Role extends RoleBase {
	id: 6666;
	name: "SUPPLIER_ADMIN";
	description: "Supplier's administrator who manages assigned supplier";
}

export interface CLIENT_ADMIN_Role extends RoleBase {
	id: 8888;
	name: "CLIENT_ADMIN";
	description: "Client's administrator who manages suppliers";
}

export type Role = ASN_USER_Role | DI_USER_Role | SUPPLIER_ADMIN_Role | CLIENT_ADMIN_Role;

export type ValidRoleId = 3333 | 4444 | 6666 | 8888;

export interface Shipment {
	id: number;
	clientNumber: string;
	supplierNumber: string;
	customerNumber: string;
	status: number;
	creationDate: string; // date
	plantDescription: string;
	shipmentNumber: string;
	packagingType: string;
	qtyInPackage: string;
	shipmentGrossWeight: number;
	shipmentNetWeight: number;
	supplierPlant: string;
	supplierPlantCountry: string;
	supplierPlantZipCode: string;
	estimatedArrivalDate: string; // date
	estimatedArrivalTime: string;
	inCoTerms: string;
	transportMode: string;
	transportKey: string;
	transportNumber: string;
	transportType: string;
	hazardousGoods: string;
	transportPartnerNo: string;
	carrier: string;
	updatedAt: string; // date
	updatedBy: string;
	createdAt: string; // date
	createdBy: string;
	shipmentDate: string; // date
	shipmentTime: string;
	plantNumber: string;
	kindOfTransport: string;
	orderingKey: string;
	unitOfMeasure: string;
	serialLabelNoPrefix: number;
}

export interface ShipmentNumbers {
	id: number;
	supplierNumber: string;
	number: string;
	clientNumber: string;
	status: string;
	updatedAt: string; // date
	updatedBy: string;
	createdAt: string; // date
	createdBy: string;
}

export interface Supplier {
	id: number;
	adminUserId: number;
	clientId: number;
	number: string;
	name: string;
	streetHouseNumber: string;
	zipCode: string;
	city: string;
	land: string;
	phone: string;
	fax: string;
	email: string;
	status: string;
	labWarningInHours: number;
	updatedAt: string; // date
	updatedBy: string;
	createdAt: string; // date
	createdBy: string;
	ebWarningInHours: number;
	dunsNumber: string;
	labInfoInHours: number;
	bruInfoInHours: number;
	labWarningToClient: number;
	besWarningInHours: number;
	bewWarningInHours: number;
	bruWarningInHours: number;
	mabWarningInHours: number;
	concurrentEdi: number;
	asnNotificationInHours: number;
	asnWarningInHours: number;
}

export interface UpdateSupplier {
	id: number;
	adminUserId: number;
	clientId: number;
	number: string;
	name: string;
	streetHouseNumber: string;
	zipCode: string;
	city: string;
	land: string;
	phone: string;
	fax: string;
	email: string;
	status: string;
	labWarningInHours: number;
	updatedAt: string; // date
	updatedBy: string;
	createdAt: string; // date
	createdBy: string;
	ebWarningInHours: number;
	dunsNumber: string;
	labInfoInHours: number;
	bruInfoInHours: number;
	labWarningToClient: number;
	besWarningInHours: number;
	bewWarningInHours: number;
	bruWarningInHours: number;
	mabWarningInHours: number;
	concurrentEdi: number;
	asnNotificationInHours: number;
	asnWarningInHours: number;
}

export interface CreateSupplier {
	clientId: number;
	number: string;
	name: string;
	streetHouseNumber: string;
	zipCode: string;
	city: string;
	land: string;
	phone: string;
	fax: string;
	email: string;
}

export interface User {
	id: number;
	description?: string;
	name: string;
	password: string;
	loginName: string;
	updatedBy?: string;
	updatedAt?: string; // date
	createdBy?: string;
	createdAt?: string; // date
	lastLogin?: string;
	status?: number;
	passwordChanged?: number;
	passwordChangeable?: number;
	passwordValidTo?: string;
	passwordResetToken?: string;
	passwordResetTokenExpiredAt?: string;
	passwordSalt?: string;
}

export interface InsertUser {
	name: string;
	loginName: string;
	phone: string;
	fax: string;
	mobileNumber: string;
	email: string;
	clientNumber: string;
	password: string;
}

export interface UserData {
	id: number;
	phone: string;
	mobileNumber: string;
	fax: string;
	email: string;
	labWarning: string;
	notificationType: string;
	userId: number;
	supplierId: number;
	clientNumber: string;
	language: string;
	status: string;
	createdAt: string; // date
	createdBy: string;
	updatedAt: string; // date
	updatedBy: string;
	ebWarning: string;
	ldapUid: string;
	ebNotification: string;
	zaNotification: string;
	zaWarning: string;
	besNotification: string;
	besWarning: string;
	bewWarning: string;
	bruWarning: string;
	mabWarning: string;
	unassignedSupplierNumberWarning: string;
	inactiveUsersWarning: string;
	inactiveSupAdmWarning: string;
	inactiveCliAdmWarning: string;
	asnWarning: string;
}

export interface UserGroup {
	id: number;
	userId: number;
	groupId: number;
	supplierId: number;
}

export interface UserSorting {
	id: number;
	updatedBy: string;
	updatedAt: string; // date
	createdBy: string;
	createdAt: string; // date
	userId: number;
	key: string;
	value: string;
}

export interface Lab {
	id: number;
	clientNumber: string;
	deletionMark: 0;
	// ...other fields as necessary...
}
