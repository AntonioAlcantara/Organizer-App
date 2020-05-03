package com.charmander.app.mapper;

import com.charmander.app.entity.Flat;
import com.charmander.app.model.FlatDto;
import org.mapstruct.Mapper;

import java.util.Collection;
import java.util.List;

@Mapper(componentModel = "spring", uses = {IEventMapper.class, IUserMapper.class})
public interface IFlatMapper {

    FlatDto toDto(Flat flat);
    List<FlatDto> toDtos(Collection<Flat> flats);
}
