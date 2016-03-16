'use static';

angular
    .module('app')
    .controller('User', User);

User.$injection = ['userFactory', '$mdDialog'];

function User(userFactory, $mdDialog) {
    var vm = this;
    vm.showForm = false;
    vm.isSaveForm = true;
    vm.isEditForm = false;
    vm.records = [];
    vm.record = {};

    vm.store = store;
    vm.refresh = refresh;
    vm.clearForm = clearForm;
    vm.show = show;
    vm.showEditForm = showEditForm;
    vm.showSaveForm = showSaveForm;
    vm.edit = edit;
    vm.confirm = confirm;
    vm.actions = [
        {
            method: show,
            type: "primary",
            label : "EDITAR",
            icon: 'pencil'
        },
        {
            method: confirm,
            type: "danger",
            label : "REMOVER",
            icon: 'delete-variant'
        },
    ];

    vm.refresh();


    function store() {
        userFactory.create(vm.record).then(function() {
            vm.showForm = false;
            vm.refresh();
            vm.clearForm();
        });
    }

    function refresh() {
        userFactory.all().then(function(resources){
            vm.records =  resources.data;
        });
    }

    function clearForm() {
        vm.record.id = "";
        vm.record.email = "";
        vm.record.first_name = "";
        vm.record.last_name = "";
    }

    function show(email) {
        userFactory.findByEmail(email).then(success);

        function success(response) {
            var record = response.data[0];

            vm.record.id = record.id;
            vm.record.email = record.email;
            vm.record.first_name = record.first_name;
            vm.record.last_name = record.last_name;

            vm.showEditForm();

        }
    }

    function edit() {
        userFactory
            .edit(vm.record.id, vm.record)
            .then(success);

        function success() {
            vm.clearForm();
            vm.refresh();
            vm.showForm = false;
        }
    }

    function confirm(ev, id) {
        var confirm = $mdDialog.confirm()
            .title('Would you like to delete your debt?')
            .textContent('All of the banks have agreed to forgive you your debts.')
            .ariaLabel('Lucky day')
            .targetEvent(ev)
            .ok('SIM!')
            .cancel('NÃO!');
        $mdDialog.show(confirm).then(remove);

        function remove() {
            userFactory.remove(id);
            vm.refresh();
        }
    }

    function showSaveForm() {
        vm.clearForm();
        vm.isSaveForm = true;
        vm.isEditForm = false;
        vm.showForm = true;
    }

    function showEditForm() {
        vm.isSaveForm = false;
        vm.isEditForm = true;
        vm.showForm = true;
    }
}

