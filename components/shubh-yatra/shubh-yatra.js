function mainController($scope, $state, $http) {
    'ngInject';

    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;

    $state.go('form.main');
    $scope.addSlide = function () {
        slides.push({
            id: currIndex++
        });
    };

    for (var i = 0; i < 7; i++) {
        $scope.addSlide();
    }

    // we will store all of our first form data in this object
    $scope.formData = {firstName: '', lastName: '', email: '', phone: ''};
    $scope.originForm = angular.copy($scope.formData);

    $scope.location = {};
    $scope.originForm1 = angular.copy($scope.location);

    $scope.dt = {};
    $scope.dt1 = {};
    $scope.originForm2 = angular.copy($scope.dt1);
    $scope.originForm3 = angular.copy($scope.dt);

    $scope.radioButton = '';
    $scope.tabDisable1 = true;
    $scope.tabDisable2 = true;
    $scope.tabDisable3 = true;

    $scope.letsGo = function () {
        $scope.active = 1;
        $scope.tabDisable1 = false;
        var tab = angular.element(angular.element('.notActive')[0]);
        tab.removeClass('notActive');
    };

    $scope.clearSearch = function () {
        $scope.formData = angular.copy($scope.originForm);// Assign clear state to modified form
    };

    $scope.clearSearchSecond = function () {
        $scope.location = angular.copy($scope.originForm1);
        $scope.dt1 = angular.copy($scope.originForm2);
        $scope.dt = angular.copy($scope.originForm3);
    };
    $scope.submitForm = function () {
        $scope.active = 2;
        $scope.tabDisable2 = false;
        var tab = angular.element(angular.element('.notActive')[0]);
        tab.removeClass('notActive');
    };

    $scope.secondSubmitForm = function (valid, radioButton, checkbox) {
        $scope.active = 3;
        $scope.tabDisable3 = false;
        var tab = angular.element(angular.element('.notActive'));
        tab.removeClass('notActive');
        $scope.selectedRadioButton = angular.copy(radioButton);
        $scope.selectedCheakbox = angular.copy(checkbox);
    };
    $scope.thridSubmitForm = function () {
        $scope.active = 0;
        var body = '<b>Registration details</b>';
        body += '<p>This is the confirmation mail of the Travel Booking.</p>';
        body += 'Name: ' + $scope.formData.firstName + " " + $scope.formData.lastName;
        body += '<br>Email: ' + $scope.formData.email;
        body += '<br>Mobile: ' + $scope.formData.phone;
        body += '<br>Location: ' + $scope.location.selected.city;
        body += '<br>Depart Date: ' + $scope.dt1.date;
        body += '<br>Return Date: ' + $scope.dt.date;
        body += '<br>Note: You are not required to replay to this email.';
        body += '<br><br><br>Thanks & Regards,<br>Shubh-Yatra.';

        // $scope.send = function(){
        $scope.message = {
            sender: 'sangita@shubhYatra.com',
            subject: 'Travel Booking',
            body: body,
            reciepant: $scope.formData.email
        };
        $http.post('http://192.168.10.74:8000/sendMail', $scope.message).success(function (data) {
            alert('Send Mail..')
        }).error(function (data) {
            console.error("error in posting");
        });
        $state.go('form.main');
        $scope.tabDisable1 = true;
        $scope.tabDisable2 = true;
        $scope.tabDisable3 = true;
        for (var i = 0; i <= 3; i++) {
            var tab = angular.element(angular.element('#' + i));
            tab.addClass('notActive');
        }
        $scope.clearSearch();
        $scope.clearSearch();
        $scope.clearSearchSecond();
    };
    $scope.cancel = function () {
        $scope.active = 0;
        $state.go('form.main');
        $scope.clearSearch();
    };
    $scope.cancelSecond = function () {
        $scope.active = 0;
        $state.go('form.main');
        $scope.clearSearchSecond();
    };
    $scope.cancelThird = function () {
        $scope.active = 0;
        $state.go('form.main');
        $scope.clearSearch();
        $scope.clearSearchSecond();
    };
    $scope.change = function (selectedRadioButton) {
        $scope.active = 1;
        if (selectedRadioButton == 'roundTrip') {
            $scope.radioBSecond = true;
        }
    };
    $scope.phoneNumbr = /^\+?\d{2}[- ]?\d{3}[- ]?\d{5}$/;
    $scope.emailFormat = /^[a-zA-Z-'0-9._]+[a-zA-Z-'0-9._]+@[a-zA-Z-'0-9._]+\.[a-zA-Z-'.]{2,5}$/;
    $scope.name = /^([a-zA-Z-']{1,30})$/;

    $scope.locations = [
        {city: 'Boston', country: 'United States'},
        {city: 'New_York', country: 'United States'},
        {city: 'Chicago', country: 'United States'},
        {city: 'San_Francisco', country: 'United States'},
        {city: 'Pune', country: 'India '},
        {city: 'Mumbai', country: 'India '},
        {city: 'Ahmednagar', country: 'India '},
        {city: 'Satara', country: 'India '}
    ];

    $scope.dateOptions = {
        dateDisabled: disabled,
        formatYear: 'yy',
        maxDate: new Date(2020, 5, 22),
        minDate: new Date(),
        startingDay: 1
    };
    // visible only current date and future
    function disabled(data) {
        var date = data.date;
    }

    $scope.today = function () {
        $scope.dt = new Date();
        $scope.dt1 = new Date();
    };
    $scope.today();

    $scope.clear = function () {
        $scope.dt = null;
        $scope.dt1 = null;
    };

    $scope.open1 = function () {
        $scope.popup1.opened = true;
    };

    $scope.open2 = function () {
        $scope.popup2.opened = true;
    };
    $scope.popup1 = {
        opened: false
    };
    $scope.popup2 = {
        opened: false
    };
}
export default mainController;