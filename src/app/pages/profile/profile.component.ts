import { PasswordValidator } from './password.validator';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { StoreKeeperService } from './../../services/store-keeper.service';
import { StorekeeperDetails } from './../../models/storekeeperDetails';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { __assign } from 'tslib';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: [ './profile.component.css' ]
})
export class ProfileComponent implements OnInit {
	constructor(
		private _router: Router,
		private _activatedRoute: ActivatedRoute,
		private _storekeeperService: StoreKeeperService,
		private _authService:AuthService,
		private _fb: FormBuilder,
		private _modalService: BsModalService,
	) {}
	user: StorekeeperDetails;
	userId: string;
	displayAlert: boolean = false; //token to render password reset message
	validResponseMessage: string;
	modalRef: BsModalRef;
	users : StorekeeperDetails[];
	userUdpateMessage : String;

	isLoading = false; //variable display/hide loader

	passwordResetForm = this._fb.group(
		{
			old_password: [ '', Validators.required],
			new_password: [ '', [ Validators.required, Validators.minLength(8) ] ],
			confirm_password: [ '', Validators.required ]
		},
		{ validators: PasswordValidator.passwordShouldMatch }
	);

	//profile update form
	updateProfileForm = this._fb.group({
		name: this._fb.group({
			first: [ '', [ Validators.required, Validators.pattern('[a-zA-Z]*') ] ],
			middle: [ '', [ Validators.pattern('[a-zA-Z]*') ] ],
			last: [ '', [ Validators.required, Validators.pattern('[a-zA-Z]*') ] ]
		}),
		address: this._fb.group({
			no: [ '', [ Validators.required, Validators.pattern('[a-zA-Z0-9 /]*') ] ],
			street: [ '', [ Validators.required, Validators.pattern('[a-zA-Z0-9 /]*') ] ],
			city: [ '', [ Validators.required, Validators.pattern('[a-zA-Z]*[0-9]*') ] ]
		}),
		contact: this._fb.group({
			email: [ '', [ Validators.required, Validators.email ] ],
			phone: [
				'',
				[
					Validators.required,
					Validators.pattern(
						/^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|5|6|7|8)\d)\d{6}$/
					)
				]
			]
		})
	});

	get updateFirstName() {
		return this.updateProfileForm.get('name.first');
	}

	get updateMiddleName() {
		return this.updateProfileForm.get('name.middle');
	}

	get updateLastName() {
		return this.updateProfileForm.get('name.last');
	}

	get updateNo() {
		return this.updateProfileForm.get('address.no');
	}

	get updateStreet() {
		return this.updateProfileForm.get('address.street');
	}

	get updateCity() {
		return this.updateProfileForm.get('address.city');
	}

	get updateEmail() {
		return this.updateProfileForm.get('contact.email');
	}

	get updatePhone() {
		return this.updateProfileForm.get('contact.phone');
	}

	//populate the form feilds with givern details
	setUpdateFormData(user: StorekeeperDetails) {
		this.updateProfileForm.patchValue({ ...user });
	}

	//reset form for profile
	resetForm() {
		this.setUpdateFormData(this.user);
	}

	revertForm() {
		this.passwordResetForm.reset();
	}
	

	// triggers the update confirmation modal
	confirmUpdate(template: TemplateRef<any>) {
		// this will trigger the modal
		this.modalRef = this._modalService.show(template, {
		  class: 'modal-md modal-dialog-centered',
		});
	  }

	// triggers when No button cliked in confirmation modal
	decline(): void {
		// reset the data in update form if declined
		this.resetForm();
		this.modalRef.hide();
	  }

	ngOnInit(): void {

		this.userId = this._authService.getId();
		
		//get data funtcion
		this._storekeeperService.getProfile(this.userId).subscribe(
			(response: { result: StorekeeperDetails }) => {
				this.user = response.result;
				this.setUpdateFormData(this.user);
				console.log(this.user);
			},
			(error) => {
				console.log(error);
			}
		);
	}

	get old_password() {
		return this.passwordResetForm.get('old_password');
	}

	get new_password() {
		return this.passwordResetForm.get('new_password');
	}

	get confirm_password() {
		return this.passwordResetForm.get('confirm_password');
	}

	// triggers when No button cliked in confirmation modal
	revert(): void {
		// reset the data in update form if declined
		this.revertForm();
		this.modalRef.hide();
	  }

	//disable the update(save) button until touched
	disableUpdateButton() {
		this.updateProfileForm.markAsPristine();
	  }

	  // closses the update-successful alert message
  	closeUpdateAlert() {
    	this.userUdpateMessage = null;
 	 }

	confirm(): void {
		console.log(this.updateProfileForm.value);
		this._storekeeperService
		  .updateProfile(this.userId ,this.updateProfileForm.value)
		  .subscribe(
			(response) => {
			  //change the user details in the current list after successful update
			  const index = this.users.indexOf(this.user);
	
			  this.user = __assign(
				{},
				this.user,
				this.updateProfileForm.value
			  );
			  this.users[index] = this.user;
			  console.log(this.user);
			  this.disableUpdateButton();
			  //display the success alert
			  this.userUdpateMessage = response.message;
			},
			(error) => {
			  console.log(error);
			}
		  );
		this.modalRef.hide();
	  }

	onSubmit() {
		this.isLoading = true; //show loader icon
		this._storekeeperService
		  .updatePassword(this.userId, this.passwordResetForm.value)
		  .subscribe(
			(response) => {
			  console.log(response);
			  this.displayAlert = true;
			  this.validResponseMessage = response.message as string;
			  this.isLoading = false; // hide loader icon
			},
			(error) => {
	
			  if(error.status==400)
			  this.passwordResetForm.setErrors({inValidReqeust:error.error.error});
			  this.isLoading = false; // hide loader icon
	
			}
		  );
	  }

	closeAlert() {
		this.displayAlert = false;
	}
}

//This is not yet finished... Jst copy pasted
