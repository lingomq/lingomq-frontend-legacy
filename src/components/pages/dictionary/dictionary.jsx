import './dictionary.component.scss';

export const Dictionary = () => {
    return (
        <div className='dictionary-section'>
            <div className='dictionary-filter-section'>
                <div className='dictionary-filter'>
                    <p>Тип:</p>
                    <select defaultValue="Все">
                        <option value="Все">Все</option>
                        <option value="Важные">Важные</option>
                        <option value="Неважные">Неважные</option>
                        <option value="Иди нахуй">Иди нахуй</option>
                    </select>
                </div>
                <div className='dictionary-filter'>
                    <p>Язык:</p>
                    <select defaultValue="Все">
                        <option value="Все">Все</option>
                        <option value="Важные">Русский</option>
                        <option value="Неважные">Английский</option>
                        <option value="Иди нахуй">Иди нахуй</option>
                    </select>
                </div>
            </div>
            <div className='dictionary-content-section'>
                <div className='word-card'>
                    <p className='word-card-native'>House</p>
                    <p className='word-card-translated'>Дом</p>
                    <p className='word-card-language'>en</p>
                </div>
            </div>
        </div>
    )
}