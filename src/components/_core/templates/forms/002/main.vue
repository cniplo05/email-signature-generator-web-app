<template>
    <div class="container">
        <div class="row">
            <div class="col bg-dark-dark">
                <div class="text-center">
                    <span><strong>Fill out for new Community Email Signature</strong></span>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <form>
                    <div class="form-group">
                        <label for="formGroupFirstName">First Name</label>
                        <input type="text" class="form-control" id="formGroupFirstName" placeholder="Juan">
                    </div>
                    <div class="form-group">
                        <label for="formGroupLastName">Last Name</label>
                        <input type="text" class="form-control" id="formGroupLastName" placeholder="Dela Cruz">
                    </div>
                    <div class="form-group">
                        <label for="formGroupEmail">Email</label>
                        <input type="text" class="form-control" id="formGroupEmail" placeholder="juandelacruz@example.com">
                    </div>
                    <div class="form-group">
                        <label for="formGroupContactNumber">Contact Number</label>
                        <input type="text" class="form-control" id="formGroupContactNumber" placeholder="+63 995 555 4535">
                    </div>
                    <div class="form-group">
                        <label for="formGroupAddress">Address</label>
                        <input type="text" class="form-control" id="formGroupAddress" placeholder="Philippines">
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Internal"
}
</script>