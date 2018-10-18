const moment = require( 'moment' ) ;

class VehicleData
{
    get fuelType()
    {
        return this._fuelType ;
    }

    set fuelType(value)
    {
        this._fuelType = value ;
    }

    get make()
    {
        return this._make ;
    }

    set make( value )
    {
        this._make = value ;
    }

    get model()
    {
        return this._model ;
    }

    set model( value )
    {
        this._model = value ;
    }

    get makeandmodelname()
    {
       return this._make + ' ' + this._model ;
    }

    get errorCode()
    {
        return this._errorCode ;
    }

    /**
     * @param string errorCode
     * @return VehicleData
     */
    set errorCode(value)
    {
        this._errorCode = value ;
    }

    /**
     * @param format
     * @return string
     */
    getTestCertificateExpiryDate(format)
    {
        if (format !== '') 
        {
            var m = moment( test._testCertificateExpiryDate);
            return m.format(format);
        }

        return this._testCertificateExpiryDate;
    }

    set testCertificateExpiryDate(value)
    {
        this._testCertificateExpiryDate = value ;
    }

    get firstUsedDate()
    {
        var format = 'DD MMMM YYYY' ;
        if (format !== '')
        {
            var m = moment( this._firstUsedDate ) ;
            return m.format( format ) ;
        }

        return this._firstUsedDate ;
    }

    set firstUsedDate( value )
    {
        this._firstUsedDate = value ;
    }

}

module.exports = VehicleData;